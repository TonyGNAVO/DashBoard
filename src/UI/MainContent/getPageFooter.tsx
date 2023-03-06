
import TacheDTO from "./TacheDto";

type TaskFooterDTO = {
    pages: number
}

// à partir d'une liste de tâche, d'un nombre de tasks par page==> un nombre de page, boolean pour les flèches gauche et droite, numéro des éléments,nombre d'éléments,tâches de la page

type executeType = (tachesDto: TacheDTO[], taskByPage: number) => TaskFooterDTO

const execute: executeType = (numberOfTask, taskByPage) => {

    const numberOfPage: number = Math.trunc(numberOfTask / taskByPage) + 1;
    return { pages: numberOfPage }
}

export default execute;