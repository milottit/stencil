import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'mt-blog-alinea',
    styleUrl: 'mt-blog-alinea.scss',
    shadow: false
})
export class MtBlogAlinea {
    @Prop() letter: string;
    @Prop() description: string;

    render() {
        return (
            <Host >
                {this.letter && <span class="mt-alinea-title">{this.letter}</span>}
                <slot name="letter"></slot>
                {this.description && <span class="mt-linea-description">{this.description}</span>}
                <slot name="description"></slot>
            </Host>
        );
    }

}