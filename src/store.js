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
    ],
    cards: [
        {
            icon: 'fa-solid fa-building',
            title: 'Buildings',
            text: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            title_flip: 'Artfully crafted',
            text_flip: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        },
        {
            icon: 'fa-solid fa-repeat',
            title: 'Renovate',
            text: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            title_flip: 'Freshly new',
            text_flip: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        },
        {
            icon: 'fa-solid fa-house',
            title: 'Construct',
            text: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            title_flip: 'Perfect lines',
            text_flip: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        },
        {
            icon: 'fa-solid fa-truck',
            title: 'Exclusive',
            text: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            title_flip: 'Planning',
            text_flip: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        }
    ]
});