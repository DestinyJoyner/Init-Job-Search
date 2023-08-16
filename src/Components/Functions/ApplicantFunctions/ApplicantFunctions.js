function applicantJobSortByDateDesc(arr) {
    const sortDateDesc = arr.sort((a,b) => {
        const dateA = new Date(a.date_applied)
        const dateB = new Date(b.date_applied)
        return dateB - dateA
    })
   return sortDateDesc
}


export {
    
}