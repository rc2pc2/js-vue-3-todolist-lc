const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                'Dublin',
                'Vienna',
                'Tokyo',
                'Berlin',
                'Antananarivo',
                // 'Seoul',
                // 'Dubai',
                // 'Jakarta',
                // 'Moscow',
                // 'Kiev',
                // 'Edinburgh',
                // 'New York',
                // 'Beijing',
            ],
            cities: [
                "Kabul", "Tirana", "Algeri", "Andorra la Vella", "Luanda", "Saint John's", "Buenos Aires", "Yerevan", "Canberra", "Vienna",
                "Baku", "Nassau", "Manama", "Dhaka", "Bridgetown", "Minsk", "Bruxelles", "Belmopan", "Porto-Novo", "Thimphu",
                "La Paz", "Sarajevo", "Gaborone", "Brasilia", "Bandar Seri Begawan", "Sofia", "Ouagadougou", "Bujumbura", "Phnom Penh",
                "Yaounde", "Ottawa", "Praia", "Bangui", "N'Djamena", "Santiago", "Beijing", "Bogotà", "Moroni", "Kinshasa",
                "San José", "Yamoussoukro", "Zagabria", "Havana", "Nicosia", "Prague", "Copenhagen", "Djibouti", "Roseau",
                "Santo Domingo", "Quito", "Il Cairo", "San Salvador", "Malabo", "Asmara", "Tallinn", "Mogadiscio", "Mbabane",
                "Addis Abeba", "Suva", "Helsinki", "Libreville", "Banjul", "Tbilisi", "Berlino", "Accra", "Atene",
                "Saint George's", "Guatemala City", "Conakry", "Bissau", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Budapest",
                "Reykjavik", "Nuova Delhi", "Jakarta", "Tehran", "Baghdad", "Dublino", "Gerusalemme", "Roma", "Kingston",
                "Tokyo", "Amman", "Astana", "Nairobi", "South Tarawa", "Pristina", "Kuwait City", "Bishkek", "Vientiane",
                "Riga", "Beirut", "Maseru", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Lusaka", "Skopje", "Antananarivo",
                "Lilongwe", "Kuala Lumpur", "Malé", "Bamako", "Valletta", "Majuro", "Nouakchott", "Port Louis", "Ciudad de México",
                "Palikir", "Chisinau", "Monaco", "Ulan Bator", "Podgorica", "Rabat", "Maputo", "Windhoek", "Kathmandu",
                "Amsterdam", "Wellington", "Managua", "Niamey", "Abuja", "Pyongyang", "Oslo", "Muscat", "Islamabad", "Melekeok",
                "Panama City", "Port Moresby", "Asunción", "Lima", "Manila", "Varsavia", "Lisbona", "Doha", "Bucarest",
                "Mosca", "Kigali", "Basseterre", "Kingstown", "Castries", "Apia", "San Marino", "São Tomé", "Riyadh",
                "Dakar", "Belgrado", "Victoria", "Freetown", "Singapore", "Bratislava", "Lubiana", "Honiara", "Mogadiscio",
                "Pretoria", "Seoul", "Juba", "Madrid", "Colombo", "Khartoum", "Paramaribo", "Stoccolma", "Berna", "Damascus",
                "Taipei", "Dushanbe", "Dodoma", "Bangkok", "Lomé", "Nuku'alofa", "Port of Spain", "Tunis", "Ankara",
                "Ashgabat", "Funafuti", "Kampala", "Kyiv", "Abu Dhabi", "Londra", "Washington D.C.", "Montevideo", "Tashkent",
                "Port-Vila", "Vaticano", "Caracas", "Hanoi", "Sana'a", "Lusaka", "Harare" ],
        }
    },
    methods: {
        addNewTodoItem(newElement){
            newElement = newElement.trim();
            console.warn(newElement);

            const beatifiedElement = this.stringBeautifier(newElement);

            if (newElement.length > 3 && this.cities.includes(beatifiedElement)
            && !this.todoList.includes(beatifiedElement) ){
                this.newTodoElement = '';
                this.todoList.push(beatifiedElement);
            }
            else
                console.error('Cannot insert an item which is not a capital city');
        },

        stringBeautifier(rawString){
            rawString = rawString.trim().toLowerCase();
            return rawString.charAt(0).toUpperCase() + rawString.slice(1);
        },

        removeTodoElement(indexToBeRemoved){
            console.log(indexToBeRemoved);
            this.todoList.splice(indexToBeRemoved, 1);
        }
    },

    created() {
    },
}).mount('#app');

