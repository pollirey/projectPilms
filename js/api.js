const API_BASE_URL = "https://shfe-diplom.neto-server.ru/";

export async function getAllData() {
    try {
        const response = await fetch(`${API_BASE_URL}alldata`);
        if (!response.ok){
            throw new Error("Ошибка сервера");
        } 
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.log(`
            Ошибка getAllData ${error.message};
            `)
    }
}