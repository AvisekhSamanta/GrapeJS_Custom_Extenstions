import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './grapes.css';
import lib from '../../../../lib/lib';

export default function GrapesEditor(props) {

	useEffect(() => {
		initEditor();
	});

	return (
		<section style={styles.container}>
			<div className="panel__top">
				<div className="panel__basic-actions"></div>
			</div>
			<section style={styles.editor} id='gjs-editor'>
				<h1>GrapesJS Editor</h1>
			</section>
			<section id='block-container' style={styles.blockContainer}></section>
		</section>
	);

	function initEditor() {
		const editor = grapesjs.init({
			// Indicate where to init the editor. We can also pass an HTMLElement
			container: '#gjs-editor',
			height: '100%',
			width: '100%',
			// Get the content for the canvas directly from the element
			// As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
			fromElement: true,
			// Disable the storage manager for the moment
			storageManager: false,
			blockManager: {
				appendTo: '#block-container',
				blocks: [
					{
						id: 'section', // id is mandatory
						label: '<b>Section</b>', // We can use HTML/SVG inside labels
						attributes: { class: 'gjs-block-section' },
						content: `<section>
					  <h1>This is a simple title</h1>
					  <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
					</section>`,
					}, {
						id: 'text',
						label: '<b>Text</b>',
						content: '<div data-gjs-type="text">Insert your text here</div>',
					}, {
						id: 'image',
						label: '<b>Image</b>',
						// Select the component once it's dropped
						select: true,
						// We can pass components as a JSON instead of a simple HTML string,
						// in this case we also use a defined component type `image`
						content: { type: 'image' },
						// This triggers `active` event on dropped components and the `image`
						// reacts by opening the AssetManager
						activate: true,
					}
				]
			},
			panels: [
				{
					id: 'panel-top',
					el: '.panel__top',
				},
				{
					id: 'basic-actions',
					el: '.panel__basic-actions',
					buttons: [
						{
							id: 'visibility',
							active: true, // active by default
							className: 'btn-toggle-borders',
							label: '<u>B</u>',
							command: 'sw-visibility', // Built-in command
						}, {
							id: 'export',
							className: 'btn-open-export',
							label: 'Exp',
							command: 'export-template',
							context: 'export-template', // For grouping context of buttons from the same panel
						}, {
							id: 'show-json',
							className: 'btn-show-json',
							label: 'JSON',
							context: 'show-json',
							command(editor) {
								editor.Modal.setTitle('Components JSON')
									.setContent(`<textarea style="width:100%; height: 250px;">
							  ${JSON.stringify(editor.getComponents())}
							</textarea>`)
									.open();
							},
						}

					]
				}
			]
		});

		document.getElementsByTagName('iframe')[0].contentDocument.querySelector('#wrapper').style.marginTop = '40px'
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		height: '100%',
		border: '3px solid #444'
	},
	editor: {
		flex: 2
	}
};