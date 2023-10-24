const personGenerator = {

    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    surnameManJson: `{
        "count": 10,
        "list": {
            "id_1": "Кирилович",
            "id_2": "Демидович",
            "id_3": "Ярославич",
            "id_4": "Романович",
            "id_5": "Алексеевич",
            "id_6": "Александрович",
            "id_7": "Андреевич",
            "id_8": "Егорович",
            "id_9": "Константинович",
            "id_10": "Николаевич"
        }
    }`,

    surnameWomanJson: `{
        "count": 10,
        "list": {
            "id_1": "Кириловна",
            "id_2": "Демидовна",
            "id_3": "Ярославна",
            "id_4": "Романовна",
            "id_5": "Алексеевна",
            "id_6": "Александровна",
            "id_7": "Андреевна",
            "id_8": "Егоровна",
            "id_9": "Константиновна",
            "id_10": "Николаевна"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameWomensMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Дарья",
            "id_3": "Мария",
            "id_4": "Лилия",
            "id_5": "Светлана",
            "id_6": "Диана",
            "id_7": "Зинаида",
            "id_8": "Ольга",
            "id_9": "Лариса",
            "id_10": "Екатерина"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {

        const obj = JSON.parse(json);
        const prop = 'id_' + this.randomIntNumber(obj.count, 1);
        return obj.list[prop];     
    },

    randomFirstName: function () {

        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.firstNameWomensMaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },

    randomSurname: function () {

        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.surnameJson) + 'а';
        } else {
            return this.randomValue(this.surnameJson);
        }
    },

    randomGender: function () {

        return this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomAge: function () {

        const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        const monthIndex = this.randomIntNumber(0, 11);
        const month = monthNames[monthIndex];

        let maxDay = 31;

        if (monthIndex === 1) { // Февраль
            maxDay = 28;
        } else if (monthIndex === 3 || monthIndex === 5 || monthIndex === 8 || monthIndex === 10) { // Апрель, Июнь, Сентябрь, Ноябрь
            maxDay = 30;
        }

        const day = this.randomIntNumber(1, maxDay);
        const year = this.randomIntNumber(1900, 2022);

        return `${day}.${month}.${year}`;
    },

    randomSurname2: function () {

        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.surnameWomanJson);
        } else {
            return this.randomValue(this.surnameManJson);
        }

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.surName2 = this.randomSurname2();
        this.person.age = this.randomAge();
        return this.person;
    }
};