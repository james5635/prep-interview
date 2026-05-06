// create a simple calculator that can evaluate basic arithmetic expressions with +, -, *, / and parentheses
class Calculator {
  private i = 0;
  private expr = "";

  evaluate(expression: string): number {
    this.expr = expression;
    this.i = 0;
    return this.parseExpression();
  }

  // expression := term ((+|-) term)*
  private parseExpression(): number {
    let value = this.parseTerm();

    while (this.match("+") || this.match("-")) {
      const op = this.expr[this.i - 1];
      const next = this.parseTerm();

      if (op === "+") value += next;
      else value -= next;
    }

    return value;
  }

  // term := factor ((*|/) factor)*
  private parseTerm(): number {
    let value = this.parseFactor();

    while (this.match("*") || this.match("/")) {
      const op = this.expr[this.i - 1];
      const next = this.parseFactor();

      if (op === "*") value *= next;
      else value /= next;
    }

    return value;
  }

  // factor := number | '(' expression ')'
  private parseFactor(): number {
    this.skipSpaces();

    if (this.match("(")) {
      const value = this.parseExpression();
      this.consume(")");
      return value;
    }

    return this.parseNumber();
  }

  private parseNumber(): number {
    this.skipSpaces();
    let start = this.i;

    while (
      this.i < this.expr.length &&
      (this.isDigit(this.expr[this.i]!) || this.expr[this.i] === ".")
    ) {
      this.i++;
    }

    const numStr = this.expr.slice(start, this.i);
    return parseFloat(numStr);
  }

  private match(char: string): boolean {
    this.skipSpaces();
    if (this.expr[this.i] === char) {
      this.i++;
      return true;
    }
    return false;
  }

  private consume(char: string) {
    this.skipSpaces();
    if (this.expr[this.i] !== char) {
      throw new Error(`Expected '${char}'`);
    }
    this.i++;
  }

  private skipSpaces() {
    while (this.expr[this.i] === " ") this.i++;
  }

  private isDigit(c: string): boolean {
    return c >= "0" && c <= "9";
  }
}

export { Calculator }