import random


def f(n):
    res = {}
    oper = {'add': "+", 'substr': "-", 'mult': "*", 'div': "/"}
    j = int(n['amount'])
    while j!=0:
        if n['difficulty'] == 'easy' or n['difficulty'] == 'medium':
            operand_1 = oper[f'{random.choice([elem for elem in n["operations"] if n["operations"][f"{elem}"] == True])}']
            if n['difficulty'] == 'easy':
                first = random.randint(1, 9)
                second = random.randint(1, 9)
            else:
                if operand_1 == '/' or operand_1 == '*':
                    first = random.randint(2, 9)
                else:
                    first = random.randint(10, 99)
                second = random.randint(10, 99)
            if operand_1 == '/':
                first *= second
            if f'{first} {operand_1} {second}' not in res:
                res[f'{first} {operand_1} {second}'] = int(eval(f'{first}{operand_1}{second}'))
                j-=1
        else:
            operand_1 = oper[f'{random.choice([elem for elem in n["operations"] if n["operations"][f"{elem}"] == True])}']
            operand_2 = oper[f'{random.choice([elem for elem in n["operations"] if n["operations"][f"{elem}"] == True])}']
            if operand_1 == '/' or operand_1 == '*' or operand_2 == '/' or operand_2 == '*':
                first = random.randint(2, 9)
                second = random.randint(2, 9)
                third = random.randint(1, 9)
            else:
                first = random.randint(10, 99)
                second = random.randint(10, 99)
                third = random.randint(10, 99)
            if operand_2 == '/':
                second *= third
            if operand_1 == '/':
                first = first * second * third
            if f'{first} {operand_1} {second} {operand_2} {third}' not in res:
                res[f'{first} {operand_1} {second} {operand_2} {third}'] = int(eval(f'{first}{operand_1}{second}{operand_2}{third}'))
                j-=1
    return res


print(f({'operations': {'add': True, 'substr': False, 'mult': False, 'div': False}, 'amount': '25', 'difficulty': 'easy'}))
