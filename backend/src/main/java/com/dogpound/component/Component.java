package com.dogpound.component;

import com.dogpound.component.exceptions.ComponentException;
import com.dogpound.component.exceptions.ComponentExceptionType;
import com.dogpound.gallery.Gallery;
import com.dogpound.dog.Dog;
import com.dogpound.component.link.Link;
import com.dogpound.page.Page;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "addable_components")
@Getter
@Setter
public class Component {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "imagePosition")
    private String imagePosition;

    @Column(name = "content")
    private String content;

    @Column(name = "buttonContent")
    private String buttonContent;

    @Column(name = "path")
    private String path;

    @Column(name = "type")
    private ComponentType type;

    @ManyToOne
    @JoinColumn(name = "dog")
    private Dog dog;

    @ManyToOne
    @JoinColumn(name = "gallery")
    private Gallery gallery;

    @OneToMany(mappedBy = "component", cascade = CascadeType.ALL)
    private List<Link> links;

    @ManyToOne
    @JoinColumn(name = "page_id", insertable = false, updatable = false)
    private Page page;
//
    @Column(name = "page_id")
    private Long pageId;

    @Column(name = "orderInPage")
    private Long order;

    public void setTypeFromString(String type) {
        if (type == null) {
            throw new ComponentException(ComponentExceptionType.INVALID_TYPE);
        }
        setType(ComponentType.of(type));
    }
}
