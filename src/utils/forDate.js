const toDate = (DateTime)=>{
    const dateString = DateTime; // Remplacez cette ligne par votre date

    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
}

export default toDate;