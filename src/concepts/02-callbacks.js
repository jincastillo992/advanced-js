import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponents = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    // findHero(id1, (error, hero) => {
    //     if (error) {
    //         element.innerHTML = error;
    //         return;
    //     }
    //     element.innerHTML = hero.name;
    // });
    findHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay heroe';
        if (error) {
            element.innerHTML = error;
            return;
        }
        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
    });
};
/**
 *
 * @param {String} id
 * @param {(error:String|null, hero:Object)=>void} callback
 */
const findHero = (id, callback) => {
    // const hero = heroes.find((hero) => hero.id === id);
    // if (!hero) {
    //     callback('error');
    //     return;
    // }
    // callback(null, hero);
    const hero = heroes.find((hero) => hero.id === id);
    // console.log({ hero });
    if (!hero) {
        callback(`Hero with ID ${id} not found.`);
        return;
    }
    callback(null, hero);
    // callback(hero);
};
