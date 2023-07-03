// select all alements

const btn = document.querySelector(".btn");
const profileImg = document.querySelector(".profile-img")
const names = document.querySelector(".name")
const username = document.querySelector(".username")
const joined = document.querySelector(".joined")
const following = document.querySelector(".following")
const followers = document.querySelector(".folowers")



// firt required ayaa dirsanaa 

function getData() {

    const userInput = document.querySelector(".input-area").value
    fetch(`https://api.github.com/users/${userInput}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("some error")
            }

        })
        .then(data => {
            profileImg.src = data.avatar_url;
            username.textContent = `@${data.login}`;
            names.textContent = data.name
            joined.textContent = `joined: ${data.created_at.substring(0, 4)}`
            following.textContent = `following ${data.following}`
            followers.textContent = `followers ${data.followers}`

        })
        .catch(error => {
            console.log(error)
        });

}

btn.addEventListener('click', getData)
// btn.addEventListener('click', getUser);