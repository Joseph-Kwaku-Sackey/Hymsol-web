import React from "react";

const LAST_UPDATED = "6th November, 2026.";

// Block types: { p }, { list: [string] }
const sections = [
	{
		title: "Acceptance of Terms",
		blocks: [
			{
				p: "By downloading, installing, or using Hymsol, you agree to these Terms of Use. If you do not agree with them, please do not use the app. These terms should be read together with our Privacy Policy, which explains how your information is handled.",
			},
		],
	},
	{
		title: "About Hymsol",
		blocks: [
			{
				p: "Hymsol is a hymn app that lets you read hymns, mark favourites, organise hymns into your own collections, and keep personal notes. Hymsol is provided for personal, non-commercial use and is designed to work fully offline.",
			},
		],
	},
	{
		title: "Your Use of the App",
		blocks: [
			{
				p: "You may use Hymsol for your own personal worship, devotion, and enjoyment. When using the app, you agree not to:",
			},
			{
				list: [
					"Copy, modify, decompile, or reverse engineer the app or any part of it.",
					"Resell, redistribute, or sublicense the app or its content for commercial gain.",
					"Remove or alter any copyright, attribution, or ownership notices.",
					"Use the app in any way that is unlawful or that could harm others.",
					"Attempt to interfere with the normal operation of the app.",
				],
			},
		],
	},
	{
		title: "Hymn Content",
		blocks: [
			{
				p: "The hymns and related content in Hymsol are provided to support Christian worship and personal devotion. We make reasonable efforts to present the hymns accurately, but we do not guarantee that every word, number, or attribution is free from error. Hymsol and its content may be used only as allowed by these terms. Rights in individual hymns, texts, and tunes remain with their respective authors, composers, and rights holders.",
			},
		],
	},
	{
		title: "Your Collections & Notes",
		blocks: [
			{
				p: "Collections and notes you create belong to you. They are stored only on your device and are never sent to us. You are responsible for what you write and for keeping it appropriate. Because we do not keep a copy, we cannot recover collections or notes that you delete, or that are lost when the app is uninstalled or its data is cleared.",
			},
		],
	},
	{
		title: "Personal Information",
		blocks: [
			{
				p: "Providing your firstname and gender is optional and is used only to personalise your experience inside the app. Please provide accurate information if you choose to share it, and you may change it anytime in Settings.",
			},
		],
	},
	{
		title: "Optional Online Features",
		blocks: [
			{ p: "Some optional features need an internet connection, including:" },
			{
				list: [
					"Checking for app updates.",
					"Using the help & feedback feature.",
					"Searching for hymn media on YouTube, Spotify, or Google.",
					"Searching for the history of a hymn author on Google.",
				],
			},
			{
				p: "When you use these features, Hymsol may open an external app or your browser. Those platforms are not owned or controlled by Hymsol, and your use of them is governed by their own terms and privacy policies. We are not responsible for their content, availability, or practices.",
			},
		],
	},
	{
		title: "Intellectual Property",
		blocks: [
			{
				p: "The Hymsol app, including its design, layout, features, and original materials, is protected by applicable intellectual property laws. These terms give you a limited, non-exclusive, non-transferable, revocable licence to use the app on your own device. They do not transfer any ownership of the app to you.",
			},
		],
	},
	{
		title: "Updates & Availability",
		blocks: [
			{
				p: "We may release updates to improve Hymsol, fix problems, or add features. We may also change, suspend, or discontinue any part of the app at any time. We do not promise that the app will always be available, uninterrupted, or free from errors, and we are not obligated to provide updates for older versions of your device or operating system.",
			},
		],
	},
	{
		title: "Disclaimer",
		blocks: [
			{
				p: 'Hymsol is provided "as is" and "as available", without warranties of any kind, whether express or implied. We do not guarantee that the app will meet every need or that it will work on every device.',
			},
		],
	},
	{
		title: "Limitation of Liability",
		blocks: [
			{
				p: "To the fullest extent permitted by law, Hymsol and its developers are not liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, the app. This includes loss of collections, notes, or preferences stored on your device. Nothing in these terms limits any rights you have under law that cannot be limited.",
			},
		],
	},
	{
		title: "Termination",
		blocks: [
			{
				p: "You may stop using Hymsol at any time by uninstalling it, which removes all local data, including your collections and notes. We may end or restrict your right to use the app if you break these terms.",
			},
		],
	},
	{
		title: "Changes to These Terms",
		blocks: [
			{
				p: 'We may update these Terms of Use occasionally. The "Last Updated" date at the top will reflect changes. Continued use of Hymsol after updates means you accept the revised terms.',
			},
		],
	},
	{
		title: "Governing Law",
		blocks: [
			{
				p: "These terms are governed by the laws of Ghana, without regard to conflict of law principles. If any part of these terms is found to be unenforceable, the rest will continue to apply.",
			},
		],
	},
	{
		title: "Contact",
		blocks: [
			{ p: "For questions about these Terms of Use:" },
			{
				list: [
					"Use the contact information on our app store listing.",
					"Use the feedback option within the app. We'll do our best to respond promptly.",
				],
			},
		],
	},
	{
		title: "Your Agreement",
		blocks: [
			{
				p: "By using Hymsol, you confirm that you have read, understood, and agree to these Terms of Use. You can withdraw your agreement by uninstalling the app at any time.",
			},
		],
	},
];

const summary = [
	"Hymsol is free for your personal worship and devotion.",
	"Please don't copy, resell, or tamper with the app.",
	"Your collections and notes are yours, and they live only on your device.",
	"Hymn rights stay with their authors and rights holders.",
	"YouTube, Spotify, and Google have their own terms.",
	"The app is provided as is, so we can't promise it will be perfect.",
	"You can stop using it anytime by uninstalling.",
];

const css = `
.legal-page {
	--legal-bg: #ffffff;
	--legal-text: #1f2328;
	--legal-muted: #59636e;
	box-sizing: border-box;
	min-height: 100vh;
	padding: 32px 16px 80px;
	background: var(--legal-bg);
	color: var(--legal-text);
	font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
	font-size: 15px;
	line-height: 1.6;
}
@media (prefers-color-scheme: dark) {
	.legal-page {
		--legal-bg: #fff;
		--legal-text: #000;
		--legal-muted: #000a;
	}
}
.legal-page__inner { width: 85%; max-width: 600px; margin: 0 auto; }
.legal-page__updated { text-align: right; color: var(--legal-muted); margin: 0 0 20px; }
.legal-page h2 { font-size: 15px; font-weight: 600; margin: 0 0 10px; }
.legal-page p { margin: 0 0 12px; text-align: left; }
.legal-page ul { margin: 0 0 12px; padding-left: 20px; }
.legal-page li { margin-bottom: 4px; }
.legal-page section { margin-bottom: 20px; }
.legal-page__summary-title { font-style: italic; font-size: 14px; margin: 32px 0 10px; }
.legal-page__summary { font-size: 14px; }
`;

const Block = ({ block }: { block: any }) => (
	<>
		{block.p && <p>{block.p}</p>}
		{block.list && (
			<ul>
				{block.list.map((item: any) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		)}
	</>
);

export default function TermsOfUse() {
	return (
		<main className="legal-page">
			<style>{css}</style>
			<div className="legal-page__inner">
				<h1 style={{ fontSize: 22, margin: "0 0 4px" }}>Terms of Use</h1>
				<p className="legal-page__updated">Last Updated: {LAST_UPDATED}</p>

				{sections.map((section) => (
					<section key={section.title}>
						<h2>{section.title}</h2>
						{section.blocks.map((block, i) => (
							<Block key={i} block={block} />
						))}
					</section>
				))}

				<p className="legal-page__summary-title">Simple Summary:</p>
				<ul className="legal-page__summary">
					{summary.map((line) => (
						<li key={line}>{line}</li>
					))}
				</ul>
			</div>
		</main>
	);
}
