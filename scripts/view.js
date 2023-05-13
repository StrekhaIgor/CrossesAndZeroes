import { startPanel } from "./controller.js";
import { gameObj } from "./model.js";


gameObj.style.display='none';

export function refreshVisible(gameObj) {
    if (gameObj.symbolPlayer) {
        gameObj.style.display = '';
        startPanel.style.display = 'none';
    }
}