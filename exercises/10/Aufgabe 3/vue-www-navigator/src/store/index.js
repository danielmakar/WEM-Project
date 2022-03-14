import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: { 
        data: {
            "html": {
              "_doc": "HTML is the standard markup language for creating Web pages.",
              "headings": {
                "content": "Die Überschriftenelemente bestehen aus sechs verschiedenen Leveln. <h1> ist die Überschrift mit der höchsten Gewichtung und <h6> mit der kleinsten. Ein Überschriften-Element beschreibt das Thema des Bereiches, welcher der Überschrift folgt. Überschriften können auch verwendet werden, um ein Inhaltsverzeichnis für ein Dokument automatisch zu erstellen.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/HTML/Element/h1-h6"
                ]
              },
              "paragraph": {
                "content": "Das <p>-Element erzeugt einen Absatz, den zusammenhängenden Abschnitt eines längeren Textes. In HTML kann <p> jedoch für jedwede Art von zu gruppierendem, zusammenhängendem Inhalt genutzt werden, zum Beispiel Bilder oder Formularfelder.",
                "references": ["https://developer.mozilla.org/de/docs/Web/HTML/Element/p"]
              },
              "link": {
                "content": "Das HTML-Link-Element (<link>) spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Mögliche Anwendungen für dieses Element sind die Definition eines relationalen Rahmens für die Navigation. Dieses Element wird am häufigsten verwendet, um mit Style Sheets zu verlinken.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/HTML/Element/link"
                ]
              },
              "image": {
                "content": "Das Element <img> fügt eine Grafik in ein Dokument ein.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/HTML/Element/img"
                ]
              },
              "table": {
                "content": "Das HTML-Tabellen-Element (<table>) repräsentiert Daten in zwei oder mehr Dimensionen.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/HTML/Element/table"
                ]
              }
            },
            "css": {
              "_doc": "CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed.",
              "selectors": {
                "content": "Selektoren definieren, auf welche Elemente eine Reihe von CSS Regeln angewendet wird.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/CSS/CSS_Selectors"
                ]
              },
              "colors": {
                "content": "Der CSS Datentyp Color beschreibt eine Farbe im sRGB Farbraum. Eine Farbe kann auf eine von drei Arten beschrieben werden: Schlüsselworte, rgb und rgba, hsl und hsla. ...",
                "references": ["https://developer.mozilla.org/de/docs/Web/CSS/Farben"]
              },
              "boxes": {
                "content": "Eine Box hat in CSS vier Bereiche: margin edge (weiß außen), border edge (grau), padding edge (grün), und content edge (weiß mitte). Das Folgende Diagramm zeigt die unterschiedlichen Höhen und Breiten anhand der Eigenschaften, die Veränderungen an einer CSS Box zulassen:",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"
                ]
              },
              "display": {
                "content": "Die display Eigenschaft legt den Typ einer Rendering-Box eines Elements fest. Für HTML sind die standardmäßigen display Werte in der HTML-Spezifikation beschrieben und in den User- bzw. Browser-Stylesheets angegeben. Für XML-Dokumente ist der voreingestellte Wert inline. <br> Zusätzlich zu den vielen verschiedenen Anzeigearten erlaubt der Wert none es, ein Element gänzlich auszublenden; wenn none verwendet wird, werden auch alle Unterelemente ausgeblendet. Das Dokument wird so dargestellt, als ob das Element nicht im Dokumentenbaum existieren würde.",
                "references": ["https://developer.mozilla.org/de/docs/Web/CSS/display"]
              },
              "float": {
                "content": "Die CSS Eigenschaft float platziert ein Element auf der linken oder rechten Seite seines Containers, so dass Text- und Inline-Elemente um das Element herum angeordnet werden können. Das Element wird aus dem normalen Fluss der Seite entfernt, bleibt aber dennoch ein Teil des Flusses (im Gegensatz zur absoluten Positionierung).",
                "references": ["https://developer.mozilla.org/de/docs/Web/CSS/float"]
              }
            },
            "javascript": {
              "_doc": "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.",
              "function": {
                "content": "Funktionen sind ein Grundbaustein in JavaScript. Eine Funktion ist eine Prozedur - eine Reihe von Anweisungen, um eine Aufgabe auszuführen oder eine Wert auszurechnen. Um Funktionen zu verwenden, müssen diese im Scope (Gültigkeitsbereich) deklariert werden, in dem sie ausgeführt werden soll.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen"
                ]
              },
              "object": {
                "content": "Ein Objekt ist eine Sammlung von zusammenhängenden Daten und/oder Funktionalitäten. Diese bestehen üblicherweise aus verschiedenen Variablen und Funktionen, die Eigenschaften und Methoden genannt werden, wenn sie sich innerhalb von Objekten befinden.",
                "references": [
                  "https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/Basics"
                ]
              },
              "scope": {
                "content": "Der aktuelle Ausführungskontext. D.h. der Kontext, in dem values und Ausdrücke sichtbar sind oder referenziert werden können. Wenn variable oder andere Ausdrücke nicht im aktuellen Ausführungskontext (Scope) sind, dann können sie nicht verwendet werden. Scopes können auch hierarchisch angeordnet sein, so dass darunter liegende Scopes (Child-Scopes) auf die darüberliegenden Elemente (Parent-Scopes) zugreifen können, aber nicht umgekehrt.",
                "references": ["https://developer.mozilla.org/de/docs/Glossary/Scope"]
              },
              "events": {
                "content": "DOM-Events werden gesendet, um Code von interessanten Dingen, welche stattgefunden haben, anzuzeigen. Jedes Event wird durch ein Objekt dargestellt, das auf der Event-Schnittstelle basiert und möglicherweise zusätzliche benutzerdefinierte Felder und/oder Funktionen enthält, die dazu benutzt werden, um zusätzliche Informationen darüber zu erhalten, was genau passiert ist. Events können alles repräsentieren, angefangen von einfachen Benutzerinteraktionen bis hin zu automatisierten Benachrichtigungen über Abläufe, die im Rendering-Modell stattgefunden haben.",
                "references": ["https://developer.mozilla.org/de/docs/Web/Events"]
              },
              "hoisting": {
                "content": "Konzeptionell bedeutet beispielsweise eine strikte Definition von Hoisting, dass Variablen- und Funktionsdeklarationen physisch an die Spitze Ihres Codes gestellt werden, was jedoch nicht das ist was tatsächlich passiert. Stattdessen werden die Variablen- und Funktionsdeklarationen während der Kompilierungsphase in den Speicher gestellt, bleiben aber genau dort, wo Sie sie in Ihrem Code geschrieben haben.",
                "references": ["https://developer.mozilla.org/de/docs/Glossary/Hoisting"]
              }
            }
        },
        dataStack: [],
        subnav_items: [],
        content: "Herzlich Wilkommen! Sie können ein Hauptthema auswählen und anschließend ein Unterthema, um sich eine passende Beschreibung anzuschauen.",
        source: ["https://www.w3schools.com/"]
    },
    mutations: { 
        add(state, curr_state) {
            state.dataStack.push(curr_state)
        },
        undo(state) {
            if (state.dataStack.length != 0) {
                state.dataStack.pop();
                if(state.dataStack.length != 0) {
                    state.subnav_items = Object.keys(state.data[state.dataStack[state.dataStack.length - 1][0]]).slice(1);
                    state.content = state.data[state.dataStack[state.dataStack.length - 1][0]][state.dataStack[state.dataStack.length - 1][1]]["content"]
                } 
                else return 'home';
                
            }
        },
        loadSubNav(state, items) {
            state.subnav_items = items;
        },
        loadContent(state, content) {
            state.content = content
        },
        loadSource(state, source) {
            state.source = source
        }
    },
    actions: {
        add (context, curr_state) {
            context.commit('add', curr_state)
        },
        undo (context) {
            context.commit('undo')
        },
        loadSubNav (context, items) {
            context.commit('loadSubNav', items)
        },
        loadContent (context, content) {
            context.commit('loadContent', content)
        },
        loadSource(context, source) {
            context.commit('loadSource', source)
        }
    }
})