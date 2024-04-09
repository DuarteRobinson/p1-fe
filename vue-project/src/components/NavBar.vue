<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    UMaSebenta
                </div>
                <a @click.prevent="$event =>" class="navbar-burger" :class="" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" >
                <div class="navbar-menu">
                    <RouterLink class="navbar-item" active-class="is-active" to="/">Apontamentos</RouterLink>
                    <RouterLink class="navbar-item" active-class="is-active" to="/stats">Estatísticas</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>