program SearchRndElementInRndArray;
uses crt;
const SIZE = 10;
const MAX_RANDOM = 15;
var
  randomArray : array [1..SIZE + 1] of integer;
  randomElement : integer;
  i : integer;
begin
  clrscr;
  randomize;

  for i := 1 to SIZE do 
    randomArray[i] := random(MAX_RANDOM);

  writeln('Filled random array: ');
  for i := 1 to SIZE do
    write(randomArray[i], ' ');

  writeln;

  randomElement := random(MAX_RANDOM);
  randomArray[SIZE + 1] := randomElement;

  i := 1;
  while (randomArray[i] <> randomElement) do
    inc(i);

  if (i <> SIZE + 1) then
    writeln('Element ', randomElement, ' is found!') 
  else
    writeln('Element ', randomElement, ' not found');
  readln;
end.