<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/root" name="wurui.oxm-slider">
    <!-- className 'J_OXMod' required  -->
    <div class="J_OXMod oxmod-oxm-slider" ox-mod="oxm-slider">
        <div data-on="1">
            <div class="slider-window transition">
                <div class="slider-imgs">
                    <xsl:for-each select="data/img-slider/i">
                        <span data-href="{href}" class="slider-img" style="background-image:url({src})" title="{title}">
                            <!--
                            <img src="{src}" title="{title}" />-->
                        </span>
                    </xsl:for-each>
                </div>
            </div>
            <div class="index-dots">
                <xsl:for-each select="data/img-slider/i">
                <i class="dot"></i>
                </xsl:for-each>
            </div>
        </div>
      </div>
    </xsl:template>

</xsl:stylesheet>
