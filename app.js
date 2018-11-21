const one = new Vue({
    el: '#vue-app-one',
    data: {
        name: '',
        website: 'https://www.google.com',
        websiteTag: '<a href="https://www.google.com">The website Tag</a>',
        age: 26,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        guys: ['ali', 'reza', 'mamad'],
        characters: [
            { name: 'ali', age: 26 },
            { name: 'reza', age: 20 },
            { name: 'mamad', age: 25 }
        ],
        title: 'Vue One'
    },
    methods: {
        // greet(time) {
        //     return `Good ${time} ${this.name}`;
        // },
        add(inc) {
            this.age += inc;
        },
        subtract(dec) {
            this.age -= dec;
        },
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    },
    computed: {
        addToA() {
            console.log('a');
            return this.a + this.age;
        },
        addToB() {
            console.log('b');
            return this.b + this.age;
        },
        compClasses() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        },
        greet() {
            return 'Greeting from Vue One';
        }

    }
});

const two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue Two'
    },
    methods: {
        changeTitle() {
            one.title = 'title changed';
        }
    },
    computed: {
        greet() { 
            return 'Greeting from Vue Two';
        }
    }
});

two.title = "changed from galaxy"