import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export const GeneralConditions = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Arrêté n°3202-24 du 20 décembre 2024
        </h2>
        <p className="text-muted-foreground">
          Conditions générales-type des contrats relatifs aux assurances obligatoires
        </p>
      </div>

      <Tabs defaultValue="trc" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trc">Tous Risques Chantier</TabsTrigger>
          <TabsTrigger value="rcd">RC Décennale</TabsTrigger>
        </TabsList>

        <TabsContent value="trc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">TRC</Badge>
                Conditions générales - Tous Risques Chantier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <div className="space-y-6">
                  {/* Définitions */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Article 2 - Définitions</h3>
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Assuré</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Garantie dommages à l'ouvrage :</strong> le maître de l'ouvrage</li>
                          <li>• <strong>Garantie RC chantier :</strong> maître d'ouvrage, architecte, ingénieur et prestataires</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Dommage immatériel</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Pertes indirectes de toute nature y compris le chômage</li>
                          <li>• Perte pécuniaire résultant de la privation de jouissance</li>
                          <li>• Insuffisance de rendement</li>
                          <li>• Impropriété à la destination de l'ouvrage</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Tiers</h4>
                        <p className="text-sm">Toute personne autre que :</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Le maître de l'ouvrage</li>
                          <li>• L'ingénieur, l'architecte et prestataires</li>
                          <li>• Les représentants légaux des personnes morales</li>
                          <li>• Les salariés ou préposés (pour dommages corporels pendant service)</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Garantie Dommages à l'ouvrage */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Garantie Dommages à l'Ouvrage</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Objet de la garantie</h4>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm">Réparation des dommages causés à l'ouvrage, matériaux et matériels destinés à être incorporés + frais de démolition/déblaiement</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Exclusions (Article 4)</h4>
                        <div className="grid gap-2">
                          <Badge variant="destructive" className="text-xs">Faute intentionnelle/dolosive</Badge>
                          <Badge variant="destructive" className="text-xs">Catastrophes naturelles</Badge>
                          <Badge variant="destructive" className="text-xs">Guerre/terrorisme</Badge>
                          <Badge variant="destructive" className="text-xs">Risques atomiques</Badge>
                          <Badge variant="destructive" className="text-xs">Corrosion/oxydation/usure</Badge>
                          <Badge variant="destructive" className="text-xs">Tempête/dégâts des eaux</Badge>
                          <Badge variant="destructive" className="text-xs">Réparations non autorisées</Badge>
                          <Badge variant="destructive" className="text-xs">Manquants (sauf vol effraction)</Badge>
                          <Badge variant="destructive" className="text-xs">Non-respect réserves bureau contrôle</Badge>
                          <Badge variant="destructive" className="text-xs">Dommages immatériels</Badge>
                          <Badge variant="destructive" className="text-xs">Plans/dessins/archives</Badge>
                          <Badge variant="destructive" className="text-xs">Biens hors périmètre chantier</Badge>
                          <Badge variant="destructive" className="text-xs">Bâtiments existants</Badge>
                          <Badge variant="destructive" className="text-xs">Installations provisoires</Badge>
                          <Badge variant="destructive" className="text-xs">Remblais non compactés</Badge>
                          <Badge variant="destructive" className="text-xs">Arrêt travaux &gt; 45 jours</Badge>
                          <Badge variant="destructive" className="text-xs">Injection sols instables</Badge>
                          <Badge variant="destructive" className="text-xs">Évacuation eaux</Badge>
                          <Badge variant="destructive" className="text-xs">Glissement terrain</Badge>
                          <Badge variant="destructive" className="text-xs">Matériaux/matériels défectueux</Badge>
                          <Badge variant="destructive" className="text-xs">Données électroniques</Badge>
                          <Badge variant="destructive" className="text-xs">Cybercriminalité</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Limites de garantie</h4>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Montant travaux si &lt; 500M DH</li>
                            <li>• 500M DH si montant ≥ 500M DH</li>
                            <li>• Multi-ouvrages : somme (max 1 milliard DH)</li>
                            <li>• Frais démolition/déblaiement : min 1/10 du montant travaux</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Franchise</h4>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• % du montant dommages (max 7%)</li>
                            <li>• Montant forfaitaire (max 20.000 DH)</li>
                            <li>• Maximum des deux montants ci-dessus</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Garantie RC Chantier */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Garantie Responsabilité Civile Chantier</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Objet de la garantie</h4>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• RC pour dommages corporels/matériels/immatériels consécutifs causés aux tiers</li>
                            <li>• RC pour dommages à l'ouvrage (sauf maître d'ouvrage)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Exclusions principales</h4>
                        <div className="grid gap-2">
                          <Badge variant="destructive" className="text-xs">Faute intentionnelle/dolosive</Badge>
                          <Badge variant="destructive" className="text-xs">Caractéristiques sol sans étude</Badge>
                          <Badge variant="destructive" className="text-xs">Vibrations mitoyenneté sans étude</Badge>
                          <Badge variant="destructive" className="text-xs">Véhicules soumis assurance obligatoire</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Limites de garantie</h4>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Dommages tiers :</strong> 50% montant travaux (min 4M, max 40M DH)</li>
                            <li>• <strong>Dommages ouvrage :</strong> 4M DH</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Franchise</h4>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Dommages matériels : max 50.000 DH</li>
                            <li>• Dommages corporels : max 1.000 DH</li>
                            <li>• Non opposable aux tiers ni au maître d'ouvrage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Obligations contractuelles */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Obligations principales</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Déclarations à la souscription</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration exacte de toutes circonstances connues</li>
                            <li>• Remise copie plans architecte et rapport étude sol</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">En cours de contrat</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration aggravation risques (8 jours)</li>
                            <li>• Déclaration arrêt travaux &gt; 45 jours (15 jours)</li>
                            <li>• Arrêt définitif : résiliation de plein droit (15 jours)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Après achèvement</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Date achèvement travaux (30 jours)</li>
                            <li>• Date réception + PV réception (30 jours)</li>
                            <li>• Montant définitif travaux (90 jours après réception)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">En cas de sinistre</h4>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration dans 5 jours (vol : 2 jours)</li>
                            <li>• Mesures sauvegarde immédiate</li>
                            <li>• Transmission documents (5 jours)</li>
                            <li>• Accord assureur avant réparation</li>
                            <li>• Conservation parties endommagées</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rcd" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">RC Décennale</Badge>
                Conditions générales seront ajoutées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                <p>Les conditions générales pour la RC Décennale de l'arrêté 3202-24 seront ajoutées prochainement.</p>
                <p className="mt-2 text-sm">En attendant, consultez l'arrêté 3201-24 pour les dispositions spécifiques à la RC Décennale.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};