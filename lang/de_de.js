"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var T =
/*#__PURE__*/
function () {
  function T() {
    _classCallCheck(this, T);

    this.page_title = "Wohn-o-Mat";
    this.qa_modal_title = "Fragen &amp; Antworten";
    this.qa_modal_body = '<h4>Was ist die Idee des Projektes?</h4>\
					<p>In Deutschland herrscht ein Wohnflächenmangel und die Baubranche kann den aktuellen Fehlbedarf nicht decken. Ein Grund für diese Entwicklung ist die steigende Wohnfläche pro Kopf. Ein Grund für eine steigende Wohnfläche können sogenannte "empty-nester" Haushalte sein, bei welchen die Kinder ausgezogen sind und meistens diese Paar weiterhin in Einfamilienhäusern wohnen, dies steigert den Wohnflächenverbrauch enorm. Aufgrund von aktuell fehlenden Beratungsangeboten im Bereich des Wohnens im Alter hat eine Gruppe Studenten der Technischen Hochschule Lübeck den Wohn-o-Mat konzipiert, um die Entscheidungsfindung bei einem anstehenden Umzug in Alter zu erleichtern und die verschiedenen Wohnformen zu präsentieren und näherzubringen.</p>\
\
					<h4>Wie wurden die Thesen erarbeitet?</h4>\
					<p>Durch die Auswertung von qualitativen Interviews wurde ein Pool an Bedürfnissen und Forderungen von bereits umgezogenen Menschen erarbeitet, aus welchem dann die Fragen und Thesen entworfen wurden.</p>\
\
					<h4>Wie sind die Profile der Wohnformen entstanden?</h4>\
					<p>Die Profile der Wohnformen wurden durch die Analyse von bestehenden Projekten in Deutschland gesammelt und mit Erfahrungen aus den Interviews untermalt. Sie sollen die Wohnformen möglichst real darstellen und wurden zudem nach den aktuellen Forderungen der Disziplin der Stadtplanung, wie geringe Flächenverbräuche oder symbiotische Organisationsformen bewertet.</p>\
\
					<h4>Wie werden die Punkte berechnet?</h4>\
					<p>Deine Antworten werden mit den vorgegebenen Profilen der Wohnformen verglichen.</p>\
					<ul>\
						<li>Stimmt deine Antwort mit der Eigenschaft der Wohnform überein, werden dieser 2 Punkte gutgeschrieben;</li>\
						<li>Weicht deine Antwort mit der Eigenschaft der Wohnform leicht ab (Zustimmung/Neutral oder Neutral/Ablehnung), werden dieser 1 Punkt gutgeschrieben;</li>\
						<li>Sind deine Antwort mit der Eigenschaft der Wohnform entgegengesetzt oder ist die Eigenschaft der Wohnform in diesem Falle unklar, dann werde keine Punkte gutgeschrieben.</li>\
					</ul>\
					<p>Eine These, die du übersprungen hast, wird nicht gewertet. Die erreichbare Höchstpunktzahl wird dadurch geringer.</p>\
					<p>Eine These, die doppelt gewichtet werden soll, wird doppelt gewichtet, das heißt, für sie wird die doppelte Punktzahl\
						gutgeschrieben (0/2/4). Dadurch können insgesamt mehr Punkte erreicht werden.</p>\
\
					<h4>Werden meine Antworten gespeichert?</h4>\
					<p>Nein. Alles läuft vollständig in deinem Browser ab.</p>\
\
					<h4>Ich habe einen inhaltlichen Fehler gefunden!</h4>\
					<p>Gib uns gern Bescheid, wir sehen uns das an. Wer „wir“ sind, steht oben auf dieser Seite.</p>\
\
					<h4>Wer hat den Mahlowat programmiert?</h4>\
					<p>Das steht\
						<a href="https://github.com/hszemi/mahlowat">hier</a>. Der Mahlowat ist übrigens freie Software!</p>\
\
					<h4>Ich habe einen Programmierfehler gefunden!</h4>\
					<p>Oh nein! Wenn du den Fehler\
						<a href="https://github.com/hszemi/mahlowat">meldest</a>, wird er vielleicht behoben.</p>';
    this.btn_qa_modal_close = "Schließen";
    this.swype_info_message_text = "Wische, um manuell zwischen Thesen zu wechseln";
    this.btn_swype_info_ok = "OK";
    this.start_subtitle = "Finde heraus welche Wohnform zu dir passt!";
    this.start_explanatory_text = "<p></p>\
					<p></p>";
    this.btn_start = "Wohn-o-Mat starten!";
    this.btn_start_show_qa = "Fragen &amp; Antworten";
    this.btn_toggle_thesis_more_text = "Erläuterung";
    this.btn_important = "These doppelt gewichten";
    this.btn_yes_text = "Zustimmung";
    this.btn_neutral_text = "Neutral";
    this.btn_no_text = "Ablehnung";
    this.btn_skip_text = "Überspringen";
    this.btn_mahlowat_show_start = "Zurück zur Startseite";
    this.btn_mahlowat_show_qa = "Fragen &amp; Antworten";
    this.btn_mahlowat_skip_remaining_theses = "Alle verbleibenden Thesen überspringen und aktuellen Stand auswerten";
    this.title_results = "Ergebnis";
    this.title_results_summary = "Zusammenfassung";
    this.text_result_below_summary = '<small>Nicht zufrieden mit dem Ergebnis?\
				<button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Ändere die Antworten oder die Gewichtung!</button>\
			</small>';
    this.title_results_details = "";
    this.btn_results_show_start = "Zurück zur Startseite";
    this.btn_results_show_qa = "Fragen &amp; Antworten";
  }

  _createClass(T, [{
    key: "thesis_number",
    value: function thesis_number(number) {
      return "These " + number;
    }
  }, {
    key: "achieved_points_text",
    value: function achieved_points_text(pointsForList, maxAchievablePoints) {
      return '' + pointsForList + '/' + maxAchievablePoints + ' Punkte';
    }
  }, {
    key: "btn_make_thesis_double_weight",
    get: function get() {
      return "These doppelt gewichten";
    }
  }, {
    key: "btn_thesis_has_double_weight",
    get: function get() {
      return "These wird doppelt gewichtet";
    }
  }, {
    key: "label_your_choice",
    get: function get() {
      return "Deine Wahl";
    }
  }, {
    key: "default_text_no_statement",
    get: function get() {
      return "<small class='text-muted'>Keine Stellungnahme.</small>";
    }
  }, {
    key: "error_loading_config_file",
    get: function get() {
      return '<b>Fehler</b> Die Konfigurationsdatei <a href="config/data.json"><tt>config/data.json</tt></a> konnte nicht geladen\
		werden. Existiert sie und enthält keine Syntaxfehler?';
    }
  }]);

  return T;
}();

