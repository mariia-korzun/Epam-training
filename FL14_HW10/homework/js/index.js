const employees = [
    {
        'id': 1,
        'rm_id': null,
        'name': 'Ange Quittonden',
        'performance': 'top',
        'last_vacation_date': '24.04.2018',
        'salary': 1415,
        'pool_name': 'Top pool'
    },
    {
        'id': 2,
        'rm_id': 1,
        'name': 'Bobina Pascow',
        'performance': 'low',
        'last_vacation_date': '26.12.2018',
        'salary': 1248
    },
    {
        'id': 3,
        'rm_id': 1,
        'name': 'Hashim Stein',
        'performance': 'top',
        'last_vacation_date': '07.06.2019',
        'salary': 679
    },
    {
        'id': 4,
        'rm_id': 1,
        'name': 'Bernadene Gillum',
        'performance': 'average',
        'last_vacation_date': '19.10.2019',
        'salary': 1484
    },
    {
        'id': 5,
        'rm_id': 1,
        'name': 'Yale Masedon',
        'performance': 'average',
        'last_vacation_date': '10.03.2020',
        'salary': 583
    },
    {
        'id': 6,
        'rm_id': 1,
        'name': 'Ellissa Cayton',
        'performance': 'top',
        'last_vacation_date': '26.10.2019',
        'salary': 1289
    },
    {
        'id': 7,
        'rm_id': 1,
        'name': 'Marybelle Kelston',
        'performance': 'top',
        'last_vacation_date': '13.03.2018',
        'salary': 1382,
        'pool_name': 'Oscar'
    },
    {
        'id': 8,
        'rm_id': 1,
        'name': 'Vevay Cowern',
        'performance': 'average',
        'last_vacation_date': '17.11.2018',
        'salary': 1301
    },
    {
        'id': 9,
        'rm_id': 1,
        'name': 'Bondy Ridolfo',
        'performance': 'low',
        'last_vacation_date': '15.06.2018',
        'salary': 1146
    },
    {
        'id': 10,
        'rm_id': 1,
        'name': 'Valenka Macguire',
        'performance': 'low',
        'last_vacation_date': '03.05.2017',
        'salary': 1236
    },
    {
        'id': 11,
        'rm_id': 7,
        'name': 'Irene Prodrick',
        'performance': 'low',
        'last_vacation_date': '06.01.2019',
        'salary': 1371
    },
    {
        'id': 12,
        'rm_id': 7,
        'name': 'Ella Kilpin',
        'performance': 'top',
        'last_vacation_date': '08.11.2018',
        'salary': 739
    },
    {
        'id': 13,
        'rm_id': 7,
        'name': 'Raeann Regenhardt',
        'performance': 'top',
        'last_vacation_date': '19.01.2018',
        'salary': 1450
    },
    {
        'id': 14,
        'rm_id': 7,
        'name': 'Emile Jobbins',
        'performance': 'low',
        'last_vacation_date': '03.09.2019',
        'salary': 1452
    },
    {
        'id': 15,
        'rm_id': 1,
        'name': "Richard D'Antonio",
        'performance': 'low',
        'last_vacation_date': '20.08.2019',
        'salary': 788
    },
    {
        'id': 16,
        'rm_id': 7,
        'name': 'Nikos Gude',
        'performance': 'average',
        'last_vacation_date': '10.01.2018',
        'salary': 790
    },
    {
        'id': 17,
        'rm_id': 1,
        'name': 'Ulrikaumeko Verrill',
        'performance': 'average',
        'last_vacation_date': '19.04.2017',
        'salary': 703
    },
    {
        'id': 18,
        'rm_id': 7,
        'name': 'Gelya Mateu',
        'performance': 'top',
        'last_vacation_date': '05.03.2019',
        'salary': 956
    },
    {
        'id': 19,
        'rm_id': 1,
        'name': 'Lauretta Ripper',
        'performance': 'average',
        'last_vacation_date': '02.03.2018',
        'salary': 863
    },
    {
        'id': 20,
        'rm_id': 7,
        'name': 'Emelina Whiff',
        'performance': 'average',
        'last_vacation_date': '30.09.2018',
        'salary': 775
    },
    {
        'id': 21,
        'rm_id': 1,
        'name': 'Kristofer Crawley',
        'performance': 'top',
        'last_vacation_date': '12.09.2019',
        'salary': 1167
    },
    {
        'id': 22,
        'rm_id': 1,
        'name': 'Libbie Sandes',
        'performance': 'top',
        'last_vacation_date': '26.09.2018',
        'salary': 1164
    },
    {
        'id': 23,
        'rm_id': 7,
        'name': 'Jaclyn Slopier',
        'performance': 'top',
        'last_vacation_date': '11.07.2018',
        'salary': 1487
    },
    {
        'id': 24,
        'rm_id': 1,
        'name': 'Fowler Ricardot',
        'performance': 'top',
        'last_vacation_date': '07.01.2018',
        'salary': 1483
    },
    {
        'id': 25,
        'rm_id': 1,
        'name': 'Zebadiah Gowrich',
        'performance': 'average',
        'last_vacation_date': '15.02.2018',
        'salary': 1190
    },
    {
        'id': 26,
        'rm_id': 7,
        'name': 'Maudie Jorge',
        'performance': 'top',
        'last_vacation_date': '08.01.2020',
        'salary': 505
    },
    {
        'id': 27,
        'rm_id': 7,
        'name': 'Kym Bottjer',
        'performance': 'average',
        'last_vacation_date': '27.02.2018',
        'salary': 556
    },
    {
        'id': 28,
        'rm_id': 7,
        'name': 'Brandea Simenot',
        'performance': 'average',
        'last_vacation_date': '30.06.2018',
        'salary': 660,
        'pool_name': 'Sierra'
    },
    {
        'id': 29,
        'rm_id': 28,
        'name': 'Quill Kingdon',
        'performance': 'low',
        'last_vacation_date': '11.12.2017',
        'salary': 1263
    },
    {
        'id': 30,
        'rm_id': 28,
        'name': 'Tyrus Jillett',
        'performance': 'average',
        'salary': 551,
        'pool_name': 'Uniform'
    },
    {
        'id': 31,
        'rm_id': 1,
        'name': 'Anne Skurm',
        'performance': 'low',
        'salary': 1012
    },
    {
        'id': 32,
        'rm_id': 7,
        'name': 'Louisa Jiruch',
        'performance': 'top',
        'last_vacation_date': '27.09.2019',
        'salary': 1148
    },
    {
        'id': 33,
        'rm_id': 28,
        'name': 'Leanor Giabucci',
        'performance': 'average',
        'salary': 1300
    },
    {
        'id': 34,
        'rm_id': 1,
        'name': 'Saw Yarn',
        'performance': 'average',
        'last_vacation_date': '17.02.2019',
        'salary': 1042
    },
    {
        'id': 35,
        'rm_id': 28,
        'name': 'Payton Clinkard',
        'performance': 'top',
        'last_vacation_date': '27.02.2018',
        'salary': 1383
    },
    {
        'id': 36,
        'rm_id': 30,
        'name': 'Wernher Shawl',
        'performance': 'average',
        'last_vacation_date': '11.02.2018',
        'salary': 897
    },
    {
        'id': 37,
        'rm_id': 28,
        'name': 'Elora Plews',
        'performance': 'average',
        'last_vacation_date': '01.09.2019',
        'salary': 1086
    },
    {
        'id': 38,
        'rm_id': 30,
        'name': 'Erda Steedman',
        'performance': 'top',
        'last_vacation_date': '26.11.2019',
        'salary': 569
    },
    {
        'id': 39,
        'rm_id': 30,
        'name': 'Clarke Plum',
        'performance': 'low',
        'last_vacation_date': '15.10.2017',
        'salary': 996
    },
    {
        'id': 40,
        'rm_id': 28,
        'name': 'Holmes Dondon',
        'performance': 'average',
        'last_vacation_date': '03.06.2017',
        'salary': 1323
    },
    {
        'id': 41,
        'rm_id': 28,
        'name': 'Coletta Davall',
        'performance': 'average',
        'last_vacation_date': '21.03.2019',
        'salary': 981
    },
    {
        'id': 42,
        'rm_id': 1,
        'name': 'Gipsy Vankin',
        'performance': 'average',
        'last_vacation_date': '07.05.2017',
        'salary': 1099
    },
    {
        'id': 43,
        'rm_id': 30,
        'name': 'Theodoric Padell',
        'performance': 'low',
        'last_vacation_date': '22.08.2018',
        'salary': 1348
    },
    {
        'id': 44,
        'rm_id': 28,
        'name': 'Anallise Goodenough',
        'performance': 'low',
        'salary': 868
    },
    {
        'id': 45,
        'rm_id': 1,
        'name': 'Tandi Gonin',
        'performance': 'low',
        'last_vacation_date': '18.11.2017',
        'salary': 811
    },
    {
        'id': 46,
        'rm_id': 30,
        'name': 'Dru Trittam',
        'performance': 'average',
        'last_vacation_date': '20.05.2019',
        'salary': 565
    },
    {
        'id': 47,
        'rm_id': 1,
        'name': 'Sigismund Shales',
        'performance': 'low',
        'last_vacation_date': '19.09.2018',
        'salary': 1110
    },
    {
        'id': 48,
        'rm_id': 1,
        'name': 'Brendin Rubel',
        'performance': 'average',
        'last_vacation_date': '01.02.2018',
        'salary': 865,
        'pool_name': 'Kilo'
    },
    {
        'id': 49,
        'rm_id': 30,
        'name': 'Jana Rodgier',
        'performance': 'low',
        'last_vacation_date': '23.10.2017',
        'salary': 1025
    },
    {
        'id': 50,
        'rm_id': 30,
        'name': 'Geoff Real',
        'performance': 'average',
        'last_vacation_date': '19.11.2018',
        'salary': 1104
    },
    {
        'id': 51,
        'rm_id': 30,
        'name': 'Dalli Spuner',
        'performance': 'top',
        'salary': 1050
    },
    {
        'id': 52,
        'rm_id': 28,
        'name': 'Ric Olner',
        'performance': 'top',
        'salary': 1048
    },
    {
        'id': 53,
        'rm_id': 7,
        'name': 'Inessa Simcox',
        'performance': 'average',
        'last_vacation_date': '07.07.2018',
        'salary': 812
    },
    {
        'id': 54,
        'rm_id': 30,
        'name': 'Lauritz Denerley',
        'performance': 'average',
        'last_vacation_date': '23.12.2018',
        'salary': 797
    },
    {
        'id': 55,
        'rm_id': 30,
        'name': 'Trudey Mewett',
        'performance': 'top',
        'last_vacation_date': '09.09.2018',
        'salary': 1141
    },
    {
        'id': 56,
        'rm_id': 48,
        'name': 'Dieter Dufty',
        'performance': 'average',
        'last_vacation_date': '19.04.2017',
        'salary': 1451
    },
    {
        'id': 57,
        'rm_id': 7,
        'name': 'Jobey Kondrat',
        'performance': 'low',
        'last_vacation_date': '04.07.2018',
        'salary': 671
    },
    {
        'id': 58,
        'rm_id': 48,
        'name': 'Benton Smyley',
        'performance': 'top',
        'last_vacation_date': '03.04.2019',
        'salary': 810
    },
    {
        'id': 59,
        'rm_id': 7,
        'name': 'Ramsey Strase',
        'performance': 'low',
        'last_vacation_date': '03.05.2017',
        'salary': 1223
    },
    {
        'id': 60,
        'rm_id': 7,
        'name': 'Lynnet Haliday',
        'performance': 'low',
        'last_vacation_date': '06.10.2019',
        'salary': 1225
    },
    {
        'id': 61,
        'rm_id': 7,
        'name': 'Alfie Huxham',
        'performance': 'top',
        'last_vacation_date': '25.11.2018',
        'salary': 1340
    },
    {
        'id': 62,
        'rm_id': 28,
        'name': 'Jaquenetta Wrefford',
        'performance': 'average',
        'last_vacation_date': '23.09.2018',
        'salary': 638
    },
    {
        'id': 63,
        'rm_id': 48,
        'name': 'Roldan Hast',
        'performance': 'top',
        'last_vacation_date': '13.09.2017',
        'salary': 963
    },
    {
        'id': 64,
        'rm_id': 28,
        'name': 'Pam De Hailes',
        'performance': 'low',
        'last_vacation_date': '02.11.2018',
        'salary': 585
    },
    {
        'id': 65,
        'rm_id': 1,
        'name': 'Zelda Reggio',
        'performance': 'average',
        'last_vacation_date': '09.04.2017',
        'salary': 625
    },
    {
        'id': 66,
        'rm_id': 7,
        'name': 'Dinah Linny',
        'performance': 'top',
        'last_vacation_date': '31.05.2018',
        'salary': 1242
    },
    {
        'id': 67,
        'rm_id': 30,
        'name': 'Fernanda Yeowell',
        'performance': 'average',
        'salary': 887
    },
    {
        'id': 68,
        'rm_id': 48,
        'name': 'Curr Alecock',
        'performance': 'average',
        'salary': 511
    },
    {
        'id': 69,
        'rm_id': 7,
        'name': 'Sarene Pidgeon',
        'performance': 'average',
        'last_vacation_date': '19.08.2019',
        'salary': 1437,
        'pool_name': 'Echo'
    },
    {
        'id': 70,
        'rm_id': 1,
        'name': 'Conroy Cominello',
        'performance': 'low',
        'last_vacation_date': '27.04.2019',
        'salary': 508
    },
    {
        'id': 71,
        'rm_id': 1,
        'name': 'Ron Oldridge',
        'performance': 'average',
        'last_vacation_date': '15.04.2019',
        'salary': 780
    },
    {
        'id': 72,
        'rm_id': 69,
        'name': 'Ara Carter',
        'performance': 'top',
        'last_vacation_date': '06.06.2019',
        'salary': 1240
    },
    {
        'id': 73,
        'rm_id': 48,
        'name': 'Fredelia Dummett',
        'performance': 'top',
        'last_vacation_date': '08.08.2019',
        'salary': 1019
    },
    {
        'id': 74,
        'rm_id': 30,
        'name': 'Jayne Luna',
        'performance': 'average',
        'last_vacation_date': '02.05.2017',
        'salary': 1085
    },
    {
        'id': 75,
        'rm_id': 7,
        'name': 'Melvyn Beyn',
        'performance': 'top',
        'last_vacation_date': '20.06.2017',
        'salary': 1139,
        'pool_name': 'Quebec'
    },
    {
        'id': 76,
        'rm_id': 75,
        'name': 'Justis Wilsee',
        'performance': 'top',
        'last_vacation_date': '05.10.2017',
        'salary': 944
    },
    {
        'id': 77,
        'rm_id': 75,
        'name': 'Tynan Sturney',
        'performance': 'low',
        'last_vacation_date': '08.12.2019',
        'salary': 1441
    },
    {
        'id': 78,
        'rm_id': 28,
        'name': 'Ora Passman',
        'performance': 'low',
        'last_vacation_date': '18.01.2018',
        'salary': 1025
    },
    {
        'id': 79,
        'rm_id': 69,
        'name': 'Danielle Calven',
        'performance': 'average',
        'last_vacation_date': '30.12.2019',
        'salary': 824
    },
    {
        'id': 80,
        'rm_id': 48,
        'name': 'Murdoch Fidal',
        'performance': 'low',
        'last_vacation_date': '02.04.2017',
        'salary': 694
    },
    {
        'id': 81,
        'rm_id': 48,
        'name': 'Ralph Lere',
        'performance': 'top',
        'last_vacation_date': '02.12.2019',
        'salary': 601,
        'pool_name': 'Romeo'
    },
    {
        'id': 82,
        'rm_id': 7,
        'name': 'Viviana Staziker',
        'performance': 'low',
        'last_vacation_date': '23.11.2019',
        'salary': 864
    },
    {
        'id': 83,
        'rm_id': 1,
        'name': 'Ennis Twatt',
        'performance': 'low',
        'last_vacation_date': '27.05.2019',
        'salary': 1213
    },
    {
        'id': 84,
        'rm_id': 30,
        'name': 'Derrick Wybrow',
        'performance': 'top',
        'last_vacation_date': '30.11.2018',
        'salary': 1360
    },
    {
        'id': 85,
        'rm_id': 69,
        'name': "Walt O'Cridigan",
        'performance': 'average',
        'last_vacation_date': '24.09.2018',
        'salary': 519
    },
    {
        'id': 86,
        'rm_id': 81,
        'name': 'Jany Farans',
        'performance': 'top',
        'last_vacation_date': '02.02.2018',
        'salary': 727
    },
    {
        'id': 87,
        'rm_id': 75,
        'name': 'Anet Landsbury',
        'performance': 'low',
        'salary': 716
    },
    {
        'id': 88,
        'rm_id': 1,
        'name': 'Bartel Kryzhov',
        'performance': 'average',
        'last_vacation_date': '02.12.2019',
        'salary': 587
    },
    {
        'id': 89,
        'rm_id': 1,
        'name': 'Caron Jarvis',
        'performance': 'average',
        'last_vacation_date': '04.08.2017',
        'salary': 1183
    },
    {
        'id': 90,
        'rm_id': 48,
        'name': 'Nathanael Stood',
        'performance': 'average',
        'last_vacation_date': '07.12.2017',
        'salary': 1297,
        'pool_name': 'Alfa'
    },
    {
        'id': 91,
        'rm_id': 69,
        'name': 'Cchaddie Maw',
        'performance': 'top',
        'last_vacation_date': '08.05.2019',
        'salary': 893,
        'pool_name': 'Kentavra'
    },
    {
        'id': 92,
        'rm_id': 90,
        'name': 'Winn Yu',
        'performance': 'low',
        'last_vacation_date': '20.03.2019',
        'salary': 1362
    },
    {
        'id': 93,
        'rm_id': 28,
        'name': 'Sonya Claasen',
        'performance': 'top',
        'last_vacation_date': '27.05.2018',
        'salary': 633
    },
    {
        'id': 94,
        'rm_id': 28,
        'name': 'Callie Foy',
        'performance': 'top',
        'last_vacation_date': '04.08.2017',
        'salary': 1027
    },
    {
        'id': 95,
        'rm_id': 7,
        'name': 'Torey Cayford',
        'performance': 'top',
        'last_vacation_date': '21.02.2019',
        'salary': 857
    },
    {
        'id': 96,
        'rm_id': 81,
        'name': 'Horatia Woloschinski',
        'performance': 'average',
        'last_vacation_date': '02.06.2019',
        'salary': 577
    },
    {
        'id': 97,
        'rm_id': 91,
        'name': 'Nell Parcell',
        'performance': 'top',
        'last_vacation_date': '01.02.2019',
        'salary': 802
    },
    {
        'id': 98,
        'rm_id': 1,
        'name': 'Leone Hurdiss',
        'performance': 'low',
        'salary': 1453
    },
    {
        'id': 99,
        'rm_id': 75,
        'name': 'Oona Garrat',
        'performance': 'average',
        'last_vacation_date': '14.03.2019',
        'salary': 1329
    },
    {
        'id': 100,
        'rm_id': 91,
        'name': 'Felicle Roostan',
        'performance': 'top',
        'last_vacation_date': '05.08.2019',
        'salary': 699
    }
]

let allEmployees = []

class Employee {
    constructor(object) {
        this.id = object.id
        this.name = object.name
        this.rm_id = object.rm_id
        this.performance = object.performance
        this.salary = object.salary
        this.lastVacationDate = object.last_vacation_date ? object.last_vacation_date : null
        allEmployees.push(this)
    }

    static findRootEmployee(employees) {
        return employees.find(employee => employee.rm_id === null)
    }

    static createEmployee(employee, employees) {
        if (!employee.pool_name) {
            return new Developer(employee)
        }
        let manager = new ResourseManager(employee)
        let poolEmployees = employees.filter(poolEmployee => poolEmployee.rm_id === employee.id)
        manager.PoolDevelopers = poolEmployees.map(poolEmployee => Employee.createEmployee(poolEmployee, employees))
        return manager
    }

    getPoolSubordinatesDevelopers() {
        throw new Error('Need to override')
    }

    getAvarageSalaryByUnit() {
        throw new Error('Need to override')
    }
    getAmountOfUnitEmployees() {
        throw new Error('Need to override')
    }
}

class Developer extends Employee {

    getPoolSubordinatesDevelopers() {
        return this
    }

    getSalaryByUnit() {
        return this.salary
    }

    getAmountOfUnitEmployees() {
        return 1
    }
    getAvarageSalaryByUnit() {
        return allEmployees.find(emloyee => this.rm_id === emloyee.id).getAvarageSalaryByUnit()
    }
}

class ResourseManager extends Employee {
    constructor(object) {
        super(object)
        this.poolName = object.pool_name
        this.PoolDevelopers = []
    }
    addPoolDevelopers(poolDeveloper) {
        this.PoolDevelopers.push(poolDeveloper)
    }
    getPoolSubordinatesDevelopers() {
        return this.PoolDevelopers
    }
    getSalaryByUnit() {
        return this.getPoolSubordinatesDevelopers().reduce((sum, employee) => {
            return employee.getSalaryByUnit() + sum
        }, this.salary)
    }
    getAmountOfUnitEmployees() {
        return this.getPoolSubordinatesDevelopers().reduce((sum, employee) => {
            return sum + employee.getAmountOfUnitEmployees()
        }, 1)
    }

    getAvarageSalaryByUnit() {
        let digit = 2
        return (this.getSalaryByUnit() / this.getAmountOfUnitEmployees()).toFixed(digit)
    }

    getSelection(func) {
        let selection = this.getPoolSubordinatesDevelopers().map(employee => {
            if (!employee.poolName) {
                return func(employee) ? employee : null
            }
            return employee.getSelection(func)
        }).flat()
        if (func(this)) {
            selection.unshift(this)
        }
        return selection.filter(item => item !== null)
    }
}

class SelectionOfEmployees {
    selectSalaryAboveAvarageSalaryByUnit(employee) {
        return employee.salary > employee.getAvarageSalaryByUnit()
    }

    selectSalaryLowerAvarageSalaryByUnit(employee) {
        return employee.salary < employee.getAvarageSalaryByUnit()
    }

    selectPerformanceLow(employee) {
        return employee.performance === 'low'
    }

    selectPerformanceTop(employee) {
        return employee.performance === 'top'
    }
}



Employee.createEmployee(Employee.findRootEmployee(employees), employees)
let rootElement = Employee.findRootEmployee(allEmployees)
let selection = new SelectionOfEmployees()



let contentList = document.getElementById('content_list')
let allEmployeesButton = document.getElementById('all_employees')
let allUnitsButton = document.getElementById('all_units')
let selectElement = document.getElementById('selection')
let warningEmployeesButton = document.getElementById('warning_employees')

allEmployeesButton.onclick = () => {
    clearContentContainer(contentList)
    let rootListItem = renderTreeEmployees(rootElement)
    contentList.appendChild(rootListItem)
}

allUnitsButton.onclick = () => {
    clearContentContainer(contentList)
    let rootUnitItem = renderUnitsAvarageSalary(rootElement)
    contentList.appendChild(rootUnitItem)
}

warningEmployeesButton.onclick = () => {
    clearContentContainer(contentList)
    let warningList
    switch (selectElement.value) {
        case 'lowPerformance':
            warningList = rootElement.getSelection(selection.selectPerformanceLow)

            break
        case 'topPerformance':
            warningList = rootElement.getSelection(selection.selectPerformanceTop)

            break
        case 'salaryAboveAverageSalary':
            warningList = rootElement.getSelection(selection.selectSalaryAboveAvarageSalaryByUnit)

            break
        case 'salaryLowerAverageSalary':
            warningList = rootElement.getSelection(selection.selectSalaryLowerAvarageSalaryByUnit)

            break
        default: break
    }
    warningList.forEach(employee => {
       let listItem = document.createElement('li')
        listItem.textContent = employee.name
        contentList.appendChild(listItem)
    })
}

function clearContentContainer(container) {
    while (container.hasChildNodes()) {
        container.firstChild.remove()
    }
}


function renderTreeEmployees(employee) {
    let employeerElement = document.createElement('li')
    employeerElement.textContent = employee.name

    let poolDevelopers = employee.getPoolSubordinatesDevelopers()

    if (Array.isArray(poolDevelopers)) {
        employeerElement.className = 'highlight'
        let treeList = document.createElement('ul')
        treeList.className = 'unhighlight'
        poolDevelopers.forEach(employee => {
            treeList.appendChild(renderTreeEmployees(employee))
        })

        employeerElement.appendChild(treeList)
    }
    return employeerElement
}

function renderUnitsAvarageSalary(manager) {
    let unitElement = document.createElement('li')
    unitElement.textContent = `${manager.poolName} average salary is ${manager.getAvarageSalaryByUnit()}`

    let subordinatedManagers = manager.getPoolSubordinatesDevelopers().filter(employee => !!employee.poolName)
    if (subordinatedManagers.length !== 0) {
        let poolList = document.createElement('ul')
        subordinatedManagers.forEach(manager => {
            poolList.appendChild(renderUnitsAvarageSalary(manager))
        })
        unitElement.appendChild(poolList)
    }

    return unitElement
}
