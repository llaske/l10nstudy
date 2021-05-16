function initLanguage() {
	i18next.init({
		lng: "en",
		debug: true,
		fallbackLng: "en",
		resources: {}
	}).then(function(t) {
		switchTo("en");
	});

	i18next.on("languageChanged", () => {
		updateContent();
	});
}

function updateContent() {
	document.getElementById("ByUser").innerHTML = i18next.t("ByUser", {user: "Lionel"});
	document.getElementById("TutoActivityTurtleBlocksJSactivity").innerHTML = i18next.t("TutoActivityTurtleBlocksJSactivity");
	document.getElementById("TutoOfflineContent").innerHTML = i18next.t("TutoOfflineContent");
	document.getElementById("LicenseTerms").innerHTML = i18next.t("LicenseTerms");
	document.getElementById("MISSING-TEXT").innerHTML = i18next.t("MISSING-TEXT");
}

function loadLanguage(lang) {
	return new Promise(function(resolve, reject) {
		axios.get("./locales/"+lang+".json").then(function(response) {
			resolve(response.data);
		}).catch(function(error) {
			reject(error);
		});
	});
}

function switchTo(language) {
	if (!i18next.hasResourceBundle(language, "translation")) {
		console.log("Load "+language);
		loadLanguage(language).then(function(locales) {
			i18next.addResourceBundle(language, "translation", locales);
			i18next.changeLanguage(language);
		})
	} else {
		i18next.changeLanguage(language);
	}
}
