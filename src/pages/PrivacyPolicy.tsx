const PrivacyPolicy = () => {
	return (
    <div className="w-[85%]  mx-auto">
      <h1 className="font-black text-3xl mt-15">Privacy Policy</h1>
			{/* Last Updated */}
			<div className="text-right mb-5 mt-1">
				<p className="text-sm">Last Updated: 19th March, 2026.</p>
			</div>

			{/* Section */}
			<h2 className="font-semibold mb-2 text-[15px]">Information We Collect</h2>

			<p className="mb-5 text-[15px]">
				<span className="font-medium">Personal Information:</span>
				<br />
				Hymsol collects only your firstname and gender, which you provide
				voluntarily on first app startup. This is used solely to personalize
				your welcome message and create a more friendly experience. Your
				personal info is stored locally on your device and is not transmitted to
				any external servers or shared with third parties.
				<br />
				<br />
				<span className="font-medium">App Usage Data:</span>
				<br />
				Information stored locally on your device includes:
				<br />
				• Your personal info (firstname & gender).
				<br />
				• Your selected theme preference (Light/Dark/System).
				<br />
				• Your preferred font size setting.
				<br />
				• Your list of favourite hymns.
				<br />
				• Your viewed hymns.
				<br />• Your search history.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">How We Use Information</h2>

			<p className="mb-5 text-[15px]">
				We use the information stored on your device solely to enhance your
				experience:
				<br />• <span className="font-semibold">Personal Info:</span> Used to
				personalize welcome messages and create a more engaging experience.
				<br />• <span className="font-semibold">Preferences:</span> Remember
				your theme and font choices for comfortable reading.
				<br />• <span className="font-semibold">Favourites & Recent:</span>{" "}
				Provide quick access to hymns you use frequently. Your firstname is used
				exclusively within the app and never for identification, marketing, or
				any external purposes.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">No Data Sharing</h2>

			<p className="mb-5 text-[15px]">
				We do not share, sell, trade, or transfer any information to third
				parties. Your personal info and all app preferences remain exclusively
				on your device.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Internet Connectivity</h2>

			<p className="mb-5 text-[15px]">
				Hymsol is designed to work fully offline. Internet access is only used
				when you enable optional features like:
				<br />• Checking for app updates.
				<br />• Using help & feedback feature.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Third-Party Services</h2>

			<p className="mb-5 text-[15px]">
				Hymsol does not integrate with third-party analytics, advertising, or
				tracking services.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Children's Privacy</h2>

			<p className="mb-5 text-[15px]">
				Hymsol is suitable for users of all ages.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Data Security</h2>

			<p className="mb-5 text-[15px]">
				All your information is stored locally on your device using secure
				storage methods.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Data Management</h2>

			<p className="mb-5 text-[15px]">
				• You can change your personal info anytime in Settings.
				<br />
				• All preferences can be reset to default.
				<br />• Uninstalling the app removes all local data.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Permissions</h2>

			<p className="mb-5 text-[15px]">
				Hymsol requests minimal permissions:
				<br />• Internet permission (optional)
				<br />• No special permissions required.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Policy Updates</h2>

			<p className="mb-5 text-[15px]">
				We may update this Privacy Policy occasionally.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Contact</h2>

			<p className="mb-5 text-[15px]">
				For questions about this Privacy Policy:
				<br />• Use the contact information on our app store listing
				<br />• Use the feedback option within the app.
			</p>

			<h2 className="font-semibold mb-2 text-[15px]">Your Consent</h2>

			<p className="mb-5 text-[15px]">
				By using Hymsol, you consent to this Privacy Policy.
			</p>

			<p className="italic mt-4 mb-2 text-[14px]">Simple Summary:</p>

			<p className="mb-5 text-[14px]">
				• We only ask for your firstname and gender (optional).
				<br />
				• Everything stays on your device.
				<br />
				• No tracking, no ads, no data sharing.
				<br />
				• You control all your information.
				<br />
				• The app works fully offline.
				<br />• Your privacy is fully respected.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
