import Vue from 'vue'
import Router from 'vue-router'
import Root from './pages/Root'

function loadView(view) {
    return () =>
        import (`./pages/${view}.vue`);
}

Vue.use(Router);

//DEFINE ROUTE
const router = new Router({
    mode: 'history',
    routes: [{
            path: '*',
            component: loadView('NotFound')
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: loadView('auth/Login')
        },
        {
            path: '/register',
            name: 'register',
            component: loadView('auth/Register')
        },
        {
            path: '/forgot-password',
            name: 'forgot_password',
            component: loadView('auth/ForgotPassword')
        },
        {
            path: '/home',
            component: Root,
            meta: { auth: true },
            children: [{
                path: '',
                name: 'home',
                component: loadView('dashboard/Home')
            }]
        },
        {
            path: '/notification',
            component: Root,
            meta: { auth: true },
            children: [{
                path: '/user/:id',
                name: 'notif',
                component: loadView('dashboard/Notif')
            }]
        },
        {
            path: '/user',
            component: Root,
            meta: { auth: true },
            children: [{
                    path: '',
                    name: 'user.index',
                    component: loadView('user/Index')
                },
                {
                    path: '/reset-password',
                    name: 'user.reset_password',
                    component: loadView('user/Password')
                },
                {
                    path: '/edit',
                    name: 'user.edit',
                    component: loadView('user/Edit')
                },
                {
                    path: '/view/:id',
                    name: 'user.view',
                    component: loadView('user/View')
                },
            ]
        },
        {
            path: '/category',
            component: Root,
            meta: { auth: true },
            children: [{
                    path: '/:id/books',
                    name: 'category.books.index',
                    component: loadView('book/Index')
                },
                {
                    path: '/:id/books/:book',
                    name: 'category.books.detail',
                    component: loadView('book/Detail')
                },
            ]
        },
        {
            path: '/library',
            component: Root,
            meta: { auth: true },
            children: [{
                    path: '',
                    name: 'library.index',
                    component: loadView('library/Index')
                },
                {
                    path: '/:id/book/:book/part/:part',
                    name: 'library.detail',
                    component: loadView('library/Detail')
                },
                {
                    path: '/book/:id/part/:part/comments',
                    name: 'library.comments',
                    component: loadView('library/Comment')
                },
            ]
        },
        {
            path: '/write-book',
            component: Root,
            meta: { auth: true },
            children: [{
                    path: '',
                    name: 'write_book.index',
                    component: loadView('write/Index')
                },
                {
                    path: '/new-book',
                    name: 'write_book.add',
                    component: loadView('write/New')
                },
                {
                    path: '/:id',
                    name: 'write_book.detail',
                    component: loadView('write/Detail')
                },
                {
                    path: '/:id/part/:part/add',
                    name: 'write_book.part.add',
                    component: loadView('write/Add')
                },
                {
                    path: '/:id/part/:part/edit',
                    name: 'write_book.part.edit',
                    component: loadView('write/Edit')
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (to.matched.some(record => record.meta.auth) && !loggedIn && !token) {
        next('/login')
        return
    }
    next()
});

export default router;