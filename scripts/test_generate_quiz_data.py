#!/usr/bin/env python3
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_quiz_data import slugify, parse_tags, cites_letter


def test_slugify():
    assert slugify("Ogólne") == "ogolne"
    assert slugify("Kresomózgowie") == "kresomozgowie"
    assert slugify("Kora mózgu - płat czołowy") == "kora-mozgu-plat-czolowy"
    assert slugify("Czucie powierzchniowe") == "czucie-powierzchniowe"
    assert slugify("  Wyspa  ") == "wyspa"


def test_parse_tags():
    assert parse_tags("#nerw_VII #neuroanatomia #Krasucki") == ["nerw_vii", "neuroanatomia", "krasucki"]
    assert parse_tags("neuron, akson") == ["neuron", "akson"]
    assert parse_tags("#OUN #anatomia #oun") == ["oun", "anatomia"]
    assert parse_tags("") == []


def test_cites_letter():
    assert cites_letter("Odpowiedź C jest poprawna, bo...") is True
    assert cites_letter("B jest nieprawidłowa, ponieważ...") is True
    assert cites_letter("Nerwy czaszkowe to układ obwodowy.") is False
    assert cites_letter("Pole A należy do kory ruchowej.") is False


if __name__ == "__main__":
    tests = [v for k, v in sorted(globals().items()) if k.startswith("test_") and callable(v)]
    for fn in tests:
        fn()
        print(f"OK {fn.__name__}")
    print(f"Wszystkie testy przeszły ({len(tests)})")
