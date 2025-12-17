export async function getUpdates() {
    try {
        const res = await fetch("https://api.github.com/repos/dallelaste0105/clan_manager/commits", {
                method: "GET"
            }
        )
        const data = await res.json();
        return data;
    } catch (error) {
        return(error);
    }   
}