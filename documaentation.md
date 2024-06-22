# Documentation

Die Funktion saveImage() speichert das aktuelle Canvas-Bild als PNG-Datei mit dem Namen "canvasImage".

Die Funktion `DrawSphere` zeichnet eine Kugel mit gegebenem Radius und einer bestimmten Anzahl von Ebenen. Die Kugel kann entweder nach links oder nach rechts geneigt sein, abhängig vom Wert des `left`-Parameters.
Die Funktion verwendet eine Schleife, um mehrere Linien zu zeichnen, die die Kugel bilden. Jede Linie wird durch eine Rotation transformiert, um eine dreidimensionale Wirkung zu erzeugen. Die Rotation basiert auf dem aktuellen `frameCount` und dem Index der Linie.
Die Funktion verwendet auch die Funktionen `stroke`, `strokeWeight` und `noFill`, um die Linienfarbe, die Linienstärke und das Füllmuster der Kugel festzulegen.
Die Funktion ruft sich selbst rekursiv auf, um die Kugel mit einer größeren Größe und einer geringeren Anzahl von Ebenen zu zeichnen. Dieser rekursive Aufruf wird fortgesetzt, solange die Anzahl der Ebenen größer als 0 ist.
Zusammenfassend zeichnet die Funktion `DrawSphere` eine Kugel mit variabler Größe und Anzahl von Ebenen, wobei die Kugel je nach `left`-Parameter geneigt ist.

Die Funktion verwendet eine Schleife, um die Kugel zu zeichnen. In jedem Schleifendurchlauf wird die Kugel um einen bestimmten Winkel gedreht und dann gezeichnet. Die Drehung basiert auf dem aktuellen frameCount und dem Index i. Die Funktion verwendet die trigonometrischen Funktionen sin() und cos() zusammen mit mathematischen Berechnungen, um den Drehwinkel zu bestimmen.

Die Funktion ruft sich selbst rekursiv auf, um eine Kugel mit einem größeren Radius zu zeichnen, solange der Wert von amount größer als 0 ist. Der Parameter left wird dabei invertiert, um die Drehrichtung zu ändern. Dies führt zu einer Art spiralförmiger Anordnung der Kugeln.
