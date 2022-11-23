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
    ],
    growth: [
        {
            icon: 'fa-solid fa-suitcase',
            number: '3534',
            text: 'Planning applications'
        },
        {
            icon: 'fa-solid fa-building',
            number: '896',
            text: 'Completed projects'
        },
        {
            icon: 'fa-solid fa-users',
            number: '172',
            text: 'Trained professionals'
        },
        {
            icon: 'fa-solid fa-globe',
            number: '19',
            text: 'International offices'
        }
    ],
    works: [
        {
            image: 'project2-featured-15013609.jpg',
            url: '#',
            title: 'Florida Heath Facility',
            category: 'Commercial'
        },
        {
            image: 'project1-featured-294276386.jpg',
            url: '#',
            title: 'Maine Modernity',
            category: 'Residential'
        },
        {
            image: 'project3-featured-189023420.jpg',
            url: '#',
            title: 'Exclusive Urban Living',
            category: 'Commercial'
        }
    ],
    review: [
        {
            image: 'home-testimonial-84268399.jpg',
            text: '“Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.”',
            name: 'John Doe',
            role: 'Property Investor'
        },
        {
            image: 'home-testimonial-113165296.jpg',
            text: '“No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.”',
            name: 'Harry Smith',
            role: 'New home owner'
        }
    ],
    partners: [
        {
            image: 'home-logo1-219096700-320x202.png',
            url: '#'
        },
        {
            image: 'home-logo2-219096700-320x202.png',
            url: '#'
        },
        {
            image: 'home-logo9-219096700-320x202.png',
            url: '#'
        },
        {
            image: 'home-logo10-219096700-320x202.png',
            url: '#'
        },
        {
            image: 'home-logo11-219096700-320x202.png',
            url: '#'
        }
    ]
});