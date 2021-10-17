import { MainPage } from '~/pages/MainPage/MainPage';
import { TownSuggest } from '~/components/TownSuggest/TownSuggest';

import './index.sass';

const app = document.querySelector<HTMLDivElement>('.app');

const mainPage = new MainPage(app);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const townSuggest = new TownSuggest(mainPage.element);
