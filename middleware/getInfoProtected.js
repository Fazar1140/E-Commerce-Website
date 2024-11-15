exports.getInfoProtected=(users)=>{
    return{id:users.id,email:users.email,username:users.username,isAdmin:users.isAdmin,isVerified:users.isVerified,avatar:users.avatar}
}