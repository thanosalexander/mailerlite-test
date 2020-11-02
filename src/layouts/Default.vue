<template>
    <div>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">Mailerlite</router-link>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                    data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </header>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link  class="nav-link" to="/" tag="a">Dashboard</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link  class="nav-link" to="/subscribers" tag="a">Subscribers</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link  class="nav-link" to="/fields" tag="a">Fields</router-link>
                            </li>
                        </ul>

                    </div>
                </nav>

                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <!-- route outlet -->
                    <!-- component matched by the route will render here -->
                    <router-view></router-view>
                </main>
            </div>
        </div>

    </div>
</template>


<script>
    export default {

    }
</script>

