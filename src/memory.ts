/**
 * A global plain object which can contain arbitrary data. 
 * You can access it both using the API and the Memory UI in the game editor. 
 * Learn how to work with memory from this article.
 */
interface Memory {
    [name: string]: any;
    creeps: {[name: string]: any};
    flags: {[name: string]: any};
    rooms: {[name: string]: any};
    spawns: {[name: string]: any};
}
