import React from "react";

const LAST_UPDATED = "6th November, 2026.";

// Block types: { p }, { labeled: [label, text] }, { list: [string | [label, text]] }
const sections = [
	{
		title: "Information We Collect",
		blocks: [
			{
				labeled: [
					"Personal Information:",
					"Hymsol collects only your firstname and gender, which you provide voluntarily on first app startup. This is used solely to personalize your welcome message and create a more friendly experience. Your personal info is stored locally on your device and is not transmitted to any external servers or shared with third parties.",
				],
			},
			{
				labeled: [
					"Content You Create:",
					"Hymsol lets you create your own hymn collections and write notes. Whatever you put in them, including collection names, the hymns you add to them, and the text of your notes, is created by you and stored only on your device. We never see, read, or receive this content.",
				],
			},
			{
				labeled: [
					"App Usage Data:",
					"Information stored locally on your device includes:",
				],
				list: [
					"Your personal info (firstname & gender).",
					"Your selected theme preference (Light/Dark/System).",
					"Your preferred font size setting.",
					"Your list of favourite hymns.",
					"Your hymn collections.",
					"Your notes.",
					"Your viewed hymns.",
					"Your search history.",
				],
			},
		],
	},
	{
		title: "How We Use Information",
		blocks: [
			{
				p: "We use the information stored on your device solely to enhance your experience:",
			},
			{
				list: [
					[
						"Personal Info:",
						"Used to personalize welcome messages and create a more engaging experience.",
					],
					[
						"Preferences:",
						"Remember your theme and font choices for comfortable reading.",
					],
					[
						"Collections & Notes:",
						"Let you organise hymns your way and keep your own thoughts, reflections, or reminders alongside them.",
					],
					[
						"Favourites & Recent:",
						"Provide quick access to hymns you use frequently.",
					],
				],
			},
			{
				p: "Your firstname is used exclusively within the app and never for identification, marketing, or any external purposes. Your collections and notes are used only to display them back to you inside the app.",
			},
		],
	},
	{
		title: "No Data Sharing",
		blocks: [
			{
				p: "We do not share, sell, trade, or transfer any information to third parties. Your personal info, collections, notes, and all app preferences remain exclusively on your device. Hymsol operates with complete privacy, no data leaves your device.",
			},
		],
	},
	{
		title: "Internet Connectivity",
		blocks: [
			{
				p: "Hymsol is designed to work fully offline. Internet access is only used when you choose optional features like:",
			},
			{
				list: [
					"Checking for app updates.",
					"Using help & feedback feature.",
					"Searching for hymn media (such as recordings or videos) on YouTube, Spotify, or Google.",
					"Searching for the history of a hymn author on Google by tapping the author's name.",
				],
			},
			{
				p: "During update checks and feedback, your personal info (just to personalise your feedback message) and preferences are not transmitted. Your collections and notes are never included. The app communicates only to check version availability from official app stores and navigate you to chat platforms.",
			},
			{
				p: "When you search for hymn media or a hymn author, Hymsol opens the platform you selected (in an external app or your browser) with a search for the hymn title or author's name. Only that search term is passed on. Your personal info, collections, and notes are never included. Once you are on YouTube, Spotify, or Google, your use of that platform is governed by its own privacy policy and terms, not by Hymsol, and we have no control over what those platforms collect.",
			},
		],
	},
	{
		title: "Third-Party Services",
		blocks: [
			{
				p: "Hymsol does not integrate with third-party analytics, advertising, or tracking services. We do not use cookies, beacons, or any other tracking technologies. Hymsol only opens YouTube, Spotify, and Google at your request when you search for hymn media or a hymn author. These platforms operate under their own privacy policies, and Hymsol does not share any of your data with them beyond the search term.",
			},
		],
	},
	{
		title: "Children's Privacy",
		blocks: [
			{
				p: "Hymsol is suitable for users of all ages. The collection of personal info is minimal and optional. Collections and notes are created by the user and stay on the device. The app content consists of Christian hymns appropriate for family worship.",
			},
		],
	},
	{
		title: "Data Security",
		blocks: [
			{
				p: "All your information, including your collections and notes, is stored locally on your device using secure storage methods provided by your operating system (iOS/Android). We do not maintain external servers or databases. Your data is protected by your device's built-in security features. If you use your device's own backup service (such as iCloud or Google backup), app data may be included in those backups, which are managed by your device provider and not by Hymsol.",
			},
		],
	},
	{
		title: "Data Management",
		blocks: [
			{ p: "You have full control over your data:" },
			{
				list: [
					"You can change your personal info anytime in Settings.",
					"You can create, rename, edit, and delete your collections at any time.",
					"You can create, edit, and delete your notes at any time.",
					"All preferences can be reset to default.",
					"Uninstalling the app removes all local data, including your collections and notes.",
					"You can clear app data through your device settings.",
				],
			},
			{
				p: "Since data is stored only on your device, you manage it directly. Because we do not keep a copy, we cannot recover collections or notes that you delete, or that are lost when the app is uninstalled or its data is cleared.",
			},
		],
	},
	{
		title: "Permissions",
		blocks: [
			{ p: "Hymsol requests minimal permissions:" },
			{
				list: [
					"Internet permission (optional) - Only for checking updates, searching for hymn media or author history, and connecting with us through messaging platforms.",
					"No special permissions required. You can deny permissions and still use all core hymn features, including collections and notes.",
				],
			},
		],
	},
	{
		title: "Policy Updates",
		blocks: [
			{
				p: 'We may update this Privacy Policy occasionally. The "Last Updated" date at the top will reflect changes. Continued use of Hymsol after updates means you accept the revised policy.',
			},
		],
	},
	{
		title: "Contact",
		blocks: [
			{ p: "For questions about this Privacy Policy:" },
			{
				list: [
					"Use the contact information on our app store listing.",
					"Use the feedback option within the app. We're committed to addressing any privacy concerns promptly.",
				],
			},
		],
	},
	{
		title: "Your Consent",
		blocks: [
			{
				p: "By providing your personal info (optional) and using Hymsol, you consent to this Privacy Policy. You can withdraw consent by uninstalling the app at any time.",
			},
		],
	},
];

const summary = [
	"We only ask for your personal info i.e your firstname and gender (optional) to welcome you personally.",
	"Your hymn collections and notes are yours alone, saved only on your device.",
	"Everything stays on your device, nothing is sent to us.",
	"No tracking, no ads, no data sharing.",
	"Searches for hymn media or authors open YouTube, Spotify, or Google, which have their own privacy policies.",
	"You control all your information.",
	"The app works fully offline.",
	"Your privacy is fully respected.",
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
.legal-page__label { font-weight: 600; }
.legal-page__summary-title { font-style: italic; font-size: 14px; margin: 32px 0 10px; }
.legal-page__summary { font-size: 14px; }
`;

const ListItem = ({ item  }:{item:any}) =>
	Array.isArray(item) ? (
		<li>
			<span className="legal-page__label">{item[0]}</span> {item[1]}
		</li>
	) : (
		<li>{item}</li>
	);

const Block = ({ block }:{block:any}) => (
	<>
		{block.labeled && (
			<p>
				<span className="legal-page__label">{block.labeled[0]}</span>{" "}
				{block.labeled[1]}
			</p>
		)}
		{block.p && <p>{block.p}</p>}
		{block.list && (
			<ul>
				{block.list.map((item:any, i:any) => (
					<ListItem key={i} item={item} />
				))}
			</ul>
		)}
	</>
);

export default function PrivacyPolicy() {
	return (
		<main className="legal-page">
			<style>{css}</style>
			<div className="legal-page__inner">
				<h1 style={{ fontSize: 22, margin: "0 0 4px" }}>Privacy Policy</h1>
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
