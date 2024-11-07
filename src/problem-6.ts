{
//
    interface Profile {
        name: string,
        age: number,
        email: string
    };

    function updateProfile(profile: Profile, updatedFields: Partial<Profile>) {
        return { ...profile, ...updatedFields };
        
    }

    const myProfile: Profile={
        name:"bappy",
        age:22,
        email:"bappy404@gmail.com"
    }

    const showResult = updateProfile(myProfile, {age:26})
    // console.log(showResult);


//
}