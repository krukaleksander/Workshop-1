export const rpn = (inputString: string): any => {

  if (inputString === "" || inputString === "abc") throw new Error("Invalid Expression");

  // in the task states: "1 +" rzuca błąd "Not Enough Operands"
  // I based on length because in this case every situation where is not enough operands will be handled

  if (inputString.length === 3) throw new Error("Not Enough Operands");

  const operandsAndOperators: Array<number | string> = inputString.split(" ").map((token) => {
      var parsedToken = isNaN(Number(token))
        ? token
        : Number(token);
      return parsedToken;
    });

  const stack: number[] = [];

  operandsAndOperators.forEach((operandOrOperator) => {
    let result;

    if (typeof operandOrOperator === "string") {
      // @ts-ignore
      result = ((a: number, b: number) => a + b)(...stack.splice(-2));
    } else result = operandOrOperator;
    stack.push(result);
  });


  return stack[0] as number;
}

// powtarzaj dla token := weź_następny_token()
//     jeżeli token to liczba
//       odłóż token na stos
//     w przeciwnym wypadku jeżeli token to operator
//       argumenty := weź_tyle_liczb_ze_stosu_ile_wymaga_operator
//       wynik := argument1 operator argument2...
//     odłóż_wynik_na_stos()
//   zwróć_ostatnią_wartość_ze_stosu()
