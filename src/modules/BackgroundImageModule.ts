import IBackgroundImage from "../interfaces/IBackgroundImage";

//En IIFE funksjon som kjøres på oppstart, opretter ett array av bakgrunnsbildeobjekter 
//Arrayet kan aksesseres fra andre steder i koden ved hjelp av getall funksjonen som returneres 
const BackgroundImageModule = ( 
    () => {
        
        const backgroundImages:IBackgroundImage[] = [
            {
                id: 1,
                name: "Background1.png"
            },
            {
                id: 2,
                name: "Background2.png"
            },
            {
                id: 3,
                name: "Background3.png"
            },
            {
                id: 4,
                name: "Background4.png"
            }
        ];

        const getAll = () : IBackgroundImage[] => backgroundImages;
    

    return{
        getAll
    }

})();

export default BackgroundImageModule;