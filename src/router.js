import { createWebHistory, createRouter } from "vue-router";
const history = createWebHistory();

import Home from './pages/Home.vue'
import Subscribers from './pages/subscribers/Subscribers.vue'
import CreateSubscriber from './pages/subscribers/CreateSubscriber.vue'
import Subscriber from './pages/subscribers/Subscriber.vue'
import EditSubscriber from './pages/subscribers/EditSubscriber.vue'
import Fields from './pages/fields/Fields.vue'
import CreateField from './pages/fields/CreateField.vue'
import Field from './pages/fields/Field.vue'
import EditField from './pages/fields/EditField.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/subscribers',
        name: 'subscribers',
        component: Subscribers
    },
    {
        path: '/subscribers/create',
        name: 'create-subscriber',
        component: CreateSubscriber
    },
    {
        path: '/subscribers/:id',
        name: 'subscriber',
        component: Subscriber
    },
    {
        path: '/subscribers/edit/:id',
        name: 'edit-subscriber',
        component: EditSubscriber
    },


    {
        path: '/fields',
        name: 'fields',
        component: Fields
    },
    {
        path: '/fields/create',
        name: 'create-field',
        component: CreateField
    },
    {
        path: '/fields/:id',
        name: 'field',
        component: Field
    },
    {
        path: '/fields/edit/:id',
        name: 'edit-field',
        component: EditField
    }
];

const router = createRouter({
    history,
    routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;