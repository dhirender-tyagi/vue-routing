import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
// import UserList from '../components/UserList.vue';
import User from '../components/User.vue';
import NotFound from '../components/NotFound.vue'
// const UserList = () =>  import ('../components/UserList.vue');

Vue.use(Router);


const Foo = {
    template: '<div>Foo</div>'
}

const Bar = {
    template: '<div>Bar</div>'
}

const Baz = {
    template: '<div>Baz</div>'
}

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/user',
            name: 'userList',
            // component: UserList,
            components: {
                default: Foo,
                a: Bar,
                b: Baz
            },
            meta: { requiresAuth: true },
            children: [
                {
                    path: ':id',
                    component: User,
                    name: 'user'
                }
            ],
            beforeEnter: (to, from, next) => {
                // eslint-disable-next-line no-console
                console.log('before enter to userlist');
                next()
            }
        },
        {
            path: '*', 
            component: NotFound
        },
    ]
});

router.beforeEach((to, from, next) => {
    // if (!to.matched.length) {
    //     next('/notFound');
    // } else {
    //     next();
    // }

    // eslint-disable-next-line no-console
    console.log('here it comes', to);
    next();
  })

export default router