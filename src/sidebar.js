import { TextControl, Button, PanelBody } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

const SidebarContent = () => {
    const [searchText, setSearchText] = useState('');
    const [replaceText, setReplaceText] = useState('');

    const content = useSelect((select) => select('core/editor').getEditedPostContent(), []);
    const { editPost } = useDispatch('core/editor');

    const handleReplace = () => {
        if (!searchText) return;

        const updatedContent = content.replaceAll(searchText, replaceText);
        editPost({ content: updatedContent });

        alert(`Replaced all occurrences of "${searchText}" with "${replaceText}".`);
    };

    return (
        <div className="sidebar-search-replace">
            <PanelBody title="Search and Replace" initialOpen={true}>
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
            </PanelBody>
        </div>
    );
};

export default SidebarContent;
