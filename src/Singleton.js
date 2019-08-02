//@ts-check

 /**
 * 
 * @template T
 * @param {{new():T}} Type
 * @returns {{getInstance():T,new():T}} Singleton Class
 */
function BCML_Singleton(Type) {
    // @ts-ignore
    return (function() {
        var instance;

        function createInstance() {
            var object = new Type();
            return object;
        }
        // @ts-ignore
        Type.getInstance = function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
        return Type;
    })();
}