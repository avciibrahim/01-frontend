const person={
    name:'İbrahim Avcı',
    address: {
        line1: 'Saray Mh.',
        ilce: 'Pursaklar',
        il: 'Ankara',
    },
    profiles:['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}