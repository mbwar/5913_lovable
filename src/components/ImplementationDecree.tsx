import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, FileText, AlertTriangle, Info } from "lucide-react";

const ImplementationDecree = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-success to-success-light text-success-foreground">
          <CardTitle className="flex items-center space-x-3">
            <FileText className="h-6 w-6" />
            <span>Arrêté d'Application 3201-24</span>
          </CardTitle>
          <CardDescription className="text-success-foreground/90">
            Modalités pratiques d'application de la loi 59-13 - 20 décembre 2024
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="amounts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="amounts">Montants & Plafonds</TabsTrigger>
          <TabsTrigger value="franchises">Franchises</TabsTrigger>
          <TabsTrigger value="exclusions-trc">Exclusions TRC</TabsTrigger>
          <TabsTrigger value="exclusions-rcd">Exclusions RCD</TabsTrigger>
        </TabsList>

        <TabsContent value="amounts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>TRC - Dommages Ouvrage</span>
                </CardTitle>
                <CardDescription>Article 2 - Arrêté 3201-24</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                  <h4 className="font-semibold">Montant minimum du plafond :</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Travaux {"< 500M"} DH</span>
                      <Badge variant="outline">= Montant travaux</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Travaux {"≥ 500M"} DH</span>
                      <Badge variant="outline">= 500M DH</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-warning/10 p-3 rounded text-sm">
                  <strong>Contrats multi-ouvrages :</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Somme {"< 1Md"} DH : somme des garanties individuelles</li>
                    <li>Somme {"≥ 1Md"} DH : plafond à 1 milliard DH</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-accent" />
                  <span>RC Chantier</span>
                </CardTitle>
                <CardDescription>Article 4 - Arrêté 3201-24</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Dommages aux tiers :</h4>
                    <div className="text-sm bg-white p-3 rounded">
                      <div className="font-medium">50% du montant des travaux</div>
                      <div className="text-muted-foreground">
                        Minimum : 4M DH | Maximum : 40M DH
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dommages à l'ouvrage :</h4>
                    <div className="text-sm bg-white p-3 rounded">
                      <div className="font-medium">4 millions DH (fixe)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-success" />
                <span>RC Décennale</span>
              </CardTitle>
              <CardDescription>Article 7 - Arrêté 3201-24</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-success/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Montant minimum du plafond :</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium mb-1">Travaux {"< 500M"} DH</div>
                    <div className="text-muted-foreground">= Montant des travaux</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium mb-1">Travaux {"≥ 500M"} DH</div>
                    <div className="text-muted-foreground">= 500 millions DH</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-warning/20 rounded text-sm">
                  <strong>Note :</strong> Mêmes règles que TRC pour les contrats multi-ouvrages
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="franchises" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Franchises TRC</CardTitle>
                <CardDescription>Article 3 - Garantie dommages ouvrage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                  <h4 className="font-semibold">Options de franchise (par ouvrage et par sinistre) :</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">Option A - Pourcentage</div>
                      <div className="text-muted-foreground">
                        % des dommages (max 7%)
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">Option B - Montant forfaitaire</div>
                      <div className="text-muted-foreground">
                        Maximum 20 000 DH
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">Option C - Maximum</div>
                      <div className="text-muted-foreground">
                        Le plus élevé entre A et B
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Franchises RC Chantier & Décennale</CardTitle>
                <CardDescription>Articles 5 & 8</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">RC Chantier (Art. 5)</h4>
                    <div className="text-sm space-y-2">
                      <div className="bg-white p-2 rounded flex justify-between">
                        <span>Dommages matériels</span>
                        <span className="font-medium">Max 50 000 DH</span>
                      </div>
                      <div className="bg-white p-2 rounded flex justify-between">
                        <span>Dommages corporels</span>
                        <span className="font-medium">Max 1 000 DH</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-success/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">RC Décennale (Art. 8)</h4>
                    <div className="text-sm space-y-2">
                      <div className="bg-white p-2 rounded">
                        <div className="font-medium">Pourcentage : max 7%</div>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <div className="font-medium">Forfaitaire :</div>
                        <div>• {"< 500M"} DH : max 50 000 DH</div>
                        <div>• {"≥ 500M"} DH : max 100 000 DH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="exclusions-trc" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Exclusions supplémentaires TRC</span>
              </CardTitle>
              <CardDescription>Article 1 - Exclusions possibles pour la garantie dommages ouvrage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-3">Exclusions comportementales</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">1. Faute intentionnelle</div>
                      <div className="text-muted-foreground">Faute dolosive de l'assuré</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">2. Non-respect contrôle</div>
                      <div className="text-muted-foreground">Réserves bureau contrôle non levées</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">9. Arrêt travaux</div>
                      <div className="text-muted-foreground">{"> 45"} jours (sauf force majeure)</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">13. Matériaux défectueux</div>
                      <div className="text-muted-foreground">Remplacement direct uniquement</div>
                    </div>
                  </div>
                </div>

                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-warning mb-3">Exclusions techniques</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">4. Documents</div>
                      <div className="text-muted-foreground">Plans, dessins, archives</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">10-12. Sols & terrassement</div>
                      <div className="text-muted-foreground">Injections, drainage, glissements</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">8. Remblais</div>
                      <div className="text-muted-foreground">Non compactés</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">14-15. Cyber</div>
                      <div className="text-muted-foreground">Données électroniques, cybercriminalité</div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Exclusions géographiques/temporelles</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">5. Hors périmètre</div>
                      <div className="text-muted-foreground">Biens hors chantier</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">6. Existant/réceptionné</div>
                      <div className="text-muted-foreground">Parties déjà réceptionnées</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">7. Installations provisoires</div>
                      <div className="text-muted-foreground">Non destinées à incorporation</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">3. Dommages immatériels</div>
                      <div className="text-muted-foreground">Retards, pénalités</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exclusions-rcd" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Exclusions supplémentaires RC Décennale</span>
              </CardTitle>
              <CardDescription>Article 6 - Exclusions possibles pour la responsabilité civile décennale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-3">Exclusions comportementales</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">1. Faute intentionnelle</div>
                      <div className="text-muted-foreground">Faute dolosive de l'assuré</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">6. Défaut d'entretien</div>
                      <div className="text-muted-foreground">Usage anormal de l'ouvrage</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">9. Économie abusive</div>
                      <div className="text-muted-foreground">Par le MO ou sur ses instructions</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">12. Nouveaux matériaux</div>
                      <div className="text-muted-foreground">Caractère nouveau prouvé par assureur</div>
                    </div>
                  </div>
                </div>

                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-warning mb-3">Exclusions liées à l'ouvrage</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">2. Seconds œuvres</div>
                      <div className="text-muted-foreground">Sauf écroulement/danger évident</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">7. Dommages immatériels</div>
                      <div className="text-muted-foreground">Consécutifs ou non</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">8. Engagements contractuels</div>
                      <div className="text-muted-foreground">Excédant responsabilité légale</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">10. Modifications</div>
                      <div className="text-muted-foreground">Travaux modification/surélévation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Exclusions externes</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">3. Incendie/Explosion</div>
                      <div className="text-muted-foreground">Sauf conséquence sinistre couvert</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">4. Événements naturels</div>
                      <div className="text-muted-foreground">Inondations, séismes</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">5. Nucléaire</div>
                      <div className="text-muted-foreground">Radioactivité, irradiation</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium">11. Exploitations minières</div>
                      <div className="text-muted-foreground">Sauf responsabilité Art. 769 DOC</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-l-4 border-l-info">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-primary" />
                <span>Points d'attention</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="bg-primary/10 p-3 rounded">
                  <strong>Exclusions conditionnelles :</strong> Certaines exclusions ne s'appliquent que si la responsabilité selon l'article 769 du DOC n'est pas engagée (ex: économies abusives, exploitations minières).
                </div>
                <div className="bg-warning/10 p-3 rounded">
                  <strong>Charge de la preuve :</strong> Pour les nouveaux matériaux/méthodes, l'assureur doit prouver le caractère nouveau.
                </div>
                <div className="bg-success/10 p-3 rounded">
                  <strong>Limites :</strong> Ces exclusions sont facultatives et doivent respecter l'article 157-14 (nullité des clauses réductives).
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImplementationDecree;