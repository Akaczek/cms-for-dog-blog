package com.dogpound.component;

import com.dogpound.component.exceptions.ComponentException;
import com.dogpound.component.exceptions.ComponentExceptionType;

public enum ComponentType {
    HEADER,
    FOOTER,
    HERO_BANNER,
    TEXT_WITH_IMAGE,
    DOG_ITEM,
    GALLERY,
    FORM,
    LINKS;

    @Override
    public String toString() {
        switch (this) {
            case HEADER -> { return "Header"; }
            case FOOTER -> { return "Footer"; }
            case HERO_BANNER -> { return "HeroBanner"; }
            case TEXT_WITH_IMAGE -> { return "TextWithImage"; }
            case DOG_ITEM -> { return "DogItem"; }
            case GALLERY -> { return "Gallery"; }
            case FORM -> { return "Form"; }
            case LINKS -> { return "Links"; }
            default -> { throw new ComponentException(ComponentExceptionType.INVALID_TYPE); }
        }
    }

    public static ComponentType of(String type) {
        switch (type) {
            case "Header" -> { return HEADER; }
            case "Footer" -> { return FOOTER; }
            case "HeroBanner" -> { return HERO_BANNER; }
            case "TextWithImage" -> { return TEXT_WITH_IMAGE; }
            case "DogItem" -> { return DOG_ITEM; }
            case "Gallery" -> { return GALLERY; }
            case "Form" -> { return FORM; }
            case "Links" -> { return LINKS; }
            default -> { throw new ComponentException(ComponentExceptionType.INVALID_TYPE); }
        }
    }
}
