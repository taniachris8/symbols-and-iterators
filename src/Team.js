export default class Team {
    constructor(name) {
        this.name = name;
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error("Персонаж уже существует");
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => this.add(character));
    }

    toArray() {
        return [...this.members];
    }
    
    iterator() {
        let index = 0;
        const membersArr = this.toArray();
        return {
            next() {
                if (index >= membersArr.length) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
                
                const members = membersArr[index];
                index++;
                return {
                    value: members,
                    done: false,
                };
            }
        };
    }
}
