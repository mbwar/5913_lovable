import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Shield, AlertTriangle, XCircle, Info, Clock } from "lucide-react";

const ConstructionInsurance = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
          <CardTitle className="flex items-center space-x-3">
            <Building2 className="h-6 w-6" />
            <span>Assurance Tous Risques Chantier (TRC)</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Guide complet pour l'application de la garantie dommages à l'ouvrage et responsabilité civile chantier
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="guarantees">Garanties</TabsTrigger>
          <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
          <TabsTrigger value="obligations">Obligations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Garantie Dommages à l'Ouvrage</span>
                </CardTitle>
                <CardDescription>Article 157-1 (1er alinéa)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Qui doit souscrire ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Le maître de l'ouvrage qui réalise ou fait réaliser des travaux de construction
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Couverture :</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Dommages affectant l'ouvrage</li>
                    <li>• Matériaux de construction</li>
                    <li>• Matériels destinés à être incorporés</li>
                    <li>• Pendant toute la durée du chantier</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Garantie RC Chantier</span>
                </CardTitle>
                <CardDescription>Article 157-1 (2ème alinéa)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Qui doit souscrire ?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• L'architecte</li>
                    <li>• L'ingénieur</li>
                    <li>• Toute personne avec contrat de louage d'ouvrage</li>
                    <li>• Le maître de l'ouvrage (pour sa RC)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Montant minimum :</h4>
                  <Badge variant="outline" className="border-accent text-accent">
                    4 à 40 millions DH (Article 157-6)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-warning" />
                <span>Durée et Sanctions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Durée (Article 157-8)</h4>
                  <div className="bg-warning/10 p-4 rounded-lg">
                    <p className="text-sm">
                      Le contrat doit être souscrit pour une durée correspondant à la durée du chantier
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Sanctions (Article 157-9)</h4>
                  <div className="space-y-2">
                    <div className="bg-destructive/10 p-3 rounded text-sm">
                      <strong>Maître d'ouvrage :</strong> 6 DH × m² de superficie couverte
                    </div>
                    <div className="bg-destructive/10 p-3 rounded text-sm">
                      <strong>Autres intervenants :</strong> 5 000 à 100 000 DH
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guarantees" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Garanties détaillées</CardTitle>
              <CardDescription>Étendue des couvertures selon les articles 157-2 et 157-4</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Garantie Dommages à l'Ouvrage</h3>
                  <div className="space-y-3">
                    <div className="bg-success/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-success mb-2">✓ Couvert</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Dommages à l'ouvrage en construction</li>
                        <li>• Dommages aux matériaux de construction</li>
                        <li>• Dommages aux matériels à incorporer</li>
                        <li>• Vol par effraction des matériaux</li>
                        <li>• Incendie, explosion</li>
                        <li>• Dégâts des eaux (hors tempête)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Garantie RC Chantier</h3>
                  <div className="space-y-3">
                    <div className="bg-success/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-success mb-2">✓ Couvert</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Dommages causés aux tiers</li>
                        <li>• Dommages à l'ouvrage du MO</li>
                        <li>• Véhicules spécialisés chantier</li>
                        <li>• Bennes, grues immobilisées</li>
                        <li>• Dommages corporels et matériels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-primary" />
                <span>Définition des Tiers (Article 157-5)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Ne sont PAS considérés comme tiers :</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Le maître de l'ouvrage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>L'architecte, ingénieur</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Les entrepreneurs et sous-traitants</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Leurs salariés pendant le service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exclusions" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-destructive" />
                <span>Exclusions de garantie</span>
              </CardTitle>
              <CardDescription>Articles 157-2 et 157-4 - Exclusions obligatoires</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="dommages" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="dommages">Dommages Ouvrage</TabsTrigger>
                  <TabsTrigger value="responsabilite">RC Chantier</TabsTrigger>
                </TabsList>
                
                <TabsContent value="dommages" className="space-y-4">
                  <div className="grid gap-4">
                    <div className="bg-destructive/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-3">Exclusions Article 157-2</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-2">
                          <li>• Tremblements de terre, ouragans</li>
                          <li>• Éruptions volcaniques</li>
                          <li>• Crues et inondations</li>
                          <li>• Guerre, terrorisme, sabotage</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• Risques atomiques/nucléaires</li>
                          <li>• Corrosion, oxydation, usure</li>
                          <li>• Tempête et dégâts des eaux liés</li>
                          <li>• Réparations sans accord assureur</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-warning/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-warning mb-2">⚠️ Attention</h4>
                      <p className="text-sm">
                        Le contrat peut stipuler d'autres exclusions dont la liste est fixée par voie réglementaire
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="responsabilite" className="space-y-4">
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-destructive mb-3">Exclusions Article 157-4</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">1. Dommages liés au sol</h5>
                        <p className="text-sm text-muted-foreground">
                          Quand l'étude de sol n'a pas été effectuée ou ses recommandations non respectées
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">2. Dommages de mitoyenneté</h5>
                        <p className="text-sm text-muted-foreground">
                          Bâtiments ≥ 5 étages avec sous-sol plus profond que les mitoyens, sans étude de mitoyenneté
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">3. Véhicules assurés</h5>
                        <p className="text-sm text-muted-foreground">
                          Sauf bennes, grues immobilisées ou véhicules spécialisés chantier
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="obligations" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Obligations du Maître d'Ouvrage</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Article 157-21</h4>
                    <p className="text-sm">
                      Peut exiger des intervenants la production d'attestations d'assurance 
                      ou souscrire pour leur compte
                    </p>
                  </div>
                  <div className="bg-warning/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Article 157-22</h4>
                    <p className="text-sm">
                      Doit présenter les attestations aux agents de contrôle urbanisme
                    </p>
                  </div>
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sanction (Article 157-23)</h4>
                    <p className="text-sm">
                      500 à 1 000 DH pour non-présentation des attestations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span>Obligations des Assureurs</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-success/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Article 157-24</h4>
                    <p className="text-sm">
                      Les assureurs agréés sont tenus de garantir les risques construction
                    </p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Article 157-25</h4>
                    <p className="text-sm">
                      En cas de refus, saisir l'Autorité qui fixe la prime obligatoire
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Article 157-8</h4>
                    <p className="text-sm">
                      Notification obligatoire à l'Administration en cas de suspension/résiliation (30 jours)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConstructionInsurance;