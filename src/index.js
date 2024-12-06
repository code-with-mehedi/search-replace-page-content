import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { TextControl, Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

const SidebarSearchReplace = () => {
    const [searchText, setSearchText] = useState('');
    const [replaceText, setReplaceText] = useState('');

    // Fetch post content
    const content = useSelect((select) => select('core/editor').getEditedPostContent(), []);
    const { editPost } = useDispatch('core/editor');

    const handleReplace = () => {
        if (!searchText) return;

        const updatedContent = content.replaceAll(searchText, replaceText);
        editPost({ content: updatedContent });

        alert(`Replaced all occurrences of "${searchText}" with "${replaceText}".`);
    };

    return (
        <PluginDocumentSettingPanel
            name="sidebar-search-replace"
            title="Search & Replace"
            className="sidebar-search-replace-panel"
        >
            <TextControl
                label="Search Text"
                value={searchText}
                onChange={(value) => setSearchText(value)}
            />
            <TextControl
                label="Replace With"
                value={replaceText}
                onChange={(value) => setReplaceText(value)}
            />
            <Button
                isPrimary
                onClick={handleReplace}
                style={{ marginTop: '1rem' }}
            >
                Replace
            </Button>
        </PluginDocumentSettingPanel>
    );
};

registerPlugin('sidebar-search-replace', { render: SidebarSearchReplace });
