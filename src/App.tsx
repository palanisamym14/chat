import * as React from 'react';
import {AppContextProvider} from './AppContext';
import Navigation from "./components/Navigation";
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';

class App extends React.Component {
    public lang = 'EN';
    public translations = this.lang && this.lang === 'DE' ? translationsDE : translationsEN;

    public state = {
        appTranslations: {
            lang: this.translations.lang,
            nav: {
                chatTabLabel: this.translations.nav.chatTabLabel,
                settingsTabLabel: this.translations.nav.settingsTabLabel
            },
        }
    };

    public render() {
        return <AppContextProvider value={this.state.appTranslations}>
            <Navigation/>
        </AppContextProvider>
    }
}

export default App;
