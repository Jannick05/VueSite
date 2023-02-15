<template>
    <header>
        <img src="../assets/mcstore.png" class="logo">
        <nav>
            <ul class="nav-links">
                <li><router-link :to="{ name: 'home' }" class="secions" href="#">Home</router-link></li>
                <li><router-link :to="{ name: 'produkter' }" class="secions" href="#">Produkter</router-link></li>
                <li><router-link :to="{ name: 'about' }" class="secions" href="#">About</router-link></li>
            </ul>
        </nav>
        <a class="profil" href="">LOGIN</a>
    </header>

</template>

<style scoped lang="scss"> 

@font-face {
  font-family: Mona Sans;
  src: url(Mona-Sans-Black.otf);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Mona Sans", monospace;
}

li, a {
    display: inline-block;
    font-weight: 500;
    font-size: 20px;
    color: #ffff;
    text-decoration: none;
}

.profil {
    padding: 8px 24px;
    color: black;
    background-color: white;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
}

.profil:hover {
    background: rgb(46, 54, 73);
    //-webkit-text-fill-color: transparent;
    color: white;
    }

.secions:hover {
    background: linear-gradient(to top,var(--tw-gradient-stops));
    --tw-gradient-from: #165ef9;
    --tw-gradient-to: rgb(249 115 22 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #08eab2;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.1);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 5%;
}

img {
    max-width: 56px;
    max-height: 56px;
}

.nav-links {
    list-style: none;

    li {
        display: inline-block;
        padding: 0 30px;
    }
}


</style>