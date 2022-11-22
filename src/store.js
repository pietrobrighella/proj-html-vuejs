import { reactive } from 'vue';

export const store = reactive({
    menu: [
        {
        item: 'Home',
        url: '#',
        },
        {
        item: 'About',
        url: '#',
        },
        {
        item: 'Services',
        url: '#',
        },
        {
        item: 'Work',
        url: '#',
        },
        {
        item: 'Articles',
        url: '#',
        },
    ]
});