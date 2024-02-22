import { App } from 'vue';
import { CyTable } from './components/table';

const elmPlusComponents = [CyTable];

export const installer = (app: App) => {
  elmPlusComponents.forEach((comp) => app.use(comp));
};
