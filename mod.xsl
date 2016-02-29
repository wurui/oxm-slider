<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/root" name="oxm-slider">
    <!-- className 'J_OXMod' required  -->
    <div class="J_OXMod oxmod-oxm-slider" ox-mod="oxm-slider">
        <div class="is-on-1">
            <ul>
                <xsl:for-each select="data/img-slider/i">
                    <li>
                        <img src="{src}" title="{title}" />
                    </li>
                </xsl:for-each>
            </ul>
            <div class="index-dots">
                <xsl:for-each select="data/img-slider/i">
                <i class="dot"></i>
                </xsl:for-each>
            </div>
        </div>
      </div>
    </xsl:template>

</xsl:stylesheet>
